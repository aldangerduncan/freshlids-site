import { Resend } from 'resend';

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

        if (!['vending', 'moto'].includes(segment)) {
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

        // 3. Send Admin Notification
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
