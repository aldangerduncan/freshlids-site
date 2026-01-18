import { Resend } from 'resend';
import Airtable from 'airtable';

export const runtime = 'nodejs';

export async function POST(request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromEmail = process.env.FROM_EMAIL;
    const notifyToEmail = process.env.NOTIFY_TO_EMAIL;

    try {
        const body = await request.json();
        const { email, segment, honeypot } = body;

        // 1. Honeypot Check (Spam Prevention)
        if (honeypot) {
            console.log('Honeypot triggered');
            // Return success to fool the bot, but do nothing
            return new Response(JSON.stringify({ success: true }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // 2. Validate Inputs
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return new Response(JSON.stringify({ error: 'Invalid email address' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        if (!['vending', 'moto', 'venue'].includes(segment)) {
            return new Response(JSON.stringify({ error: 'Invalid segment' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        if (!fromEmail || !notifyToEmail) {
            console.error('Missing environment variables: FROM_EMAIL or NOTIFY_TO_EMAIL');
            return new Response(JSON.stringify({ error: 'Server configuration error' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // 3. Add to Airtable (Non-blocking / Log errors)
        try {
            const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);
            const tableId = process.env.AIRTABLE_TABLE_ID || 'Contacts'; // Fallback to name if ID missing

            // Map segment to capitalized format
            const segmentMap = {
                'vending': 'Vending',
                'moto': 'Moto',
                'venue': 'Venue'
            };

            const mappedSegment = segmentMap[segment] || segment;

            // Check for existing record
            const existingRecords = await base(tableId).select({
                filterByFormula: `{Email Address} = '${email}'`,
                maxRecords: 1
            }).firstPage();

            if (existingRecords.length > 0) {
                // UPDATE existing record
                const recordId = existingRecords[0].id;
                await base(tableId).update(recordId, {
                    "Newsletter Segment": mappedSegment
                });
                console.log(`Updated ${email} to segment: ${mappedSegment}`);
            } else {
                // CREATE new record
                await base(tableId).create([
                    {
                        fields: {
                            "Email Address": email,
                            "Newsletter Segment": mappedSegment
                        }
                    }
                ]);
                console.log(`Added ${email} to Airtable (${mappedSegment})`);
            }
        } catch (airtableError) {
            console.error('Airtable Error:', airtableError);
            // We choose NOT to fail the request if Airtable fails, just log it.
            // If you want it to be critical, move this into the main try/catch block or throw here.
        }

        // 4. Send Admin Notification
        const adminEmailPromise = resend.emails.send({
            from: fromEmail,
            to: notifyToEmail,
            subject: `New FreshLids Signup: ${segment}`,
            html: `
        <h2>New Signup Detected</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Segment:</strong> ${segment}</p>
      `,
        });

        // 4. Send User Welcome Email
        let userSubject = '';
        let userHtml = '';

        if (segment === 'vending') {
            userSubject = 'Welcome to FreshLids Vending Updates';
            userHtml = `
        <h1>Thanks for signing up!</h1>
        <p>You're on the list for Vending Machine Industry updates.</p>
        <p>Stay tuned!</p>
        <p>- Alex</p>
      `;
        } else if (segment === 'venue') {
            userSubject = 'FreshLids Venue Inquiry Received';
            userHtml = `
        <h1>Thanks for your interest!</h1>
        <p>We have received your inquiry about bringing FreshLids to your venue.</p>
        <p>Our team will be in touch shortly to discuss placement and options.</p>
        <p>Best,</p>
        <p>The FreshLids Team</p>
      `;
        } else {
            userSubject = 'Welcome to FreshLids Moto Digest';
            userHtml = `
        <h1>Thanks for signing up!</h1>
        <p>You're on the list for the Motorcycling Daily Digest.</p>
        <p>Ride safe!</p>
        <p>- Alex</p>
      `;
        }

        const userEmailPromise = resend.emails.send({
            from: fromEmail,
            to: email,
            subject: userSubject,
            html: userHtml,
        });

        // Wait for both emails to send
        await Promise.all([adminEmailPromise, userEmailPromise]);

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Signup error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
