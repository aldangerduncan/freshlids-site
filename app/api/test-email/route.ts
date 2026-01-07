import { Resend } from "resend";

export async function GET() {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const fromEmail = process.env.FROM_EMAIL;
    const toEmail = process.env.NOTIFY_TO_EMAIL;

    if (!fromEmail || !toEmail) {
        return new Response("Missing FROM_EMAIL or NOTIFY_TO_EMAIL", { status: 500 });
    }

    await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: "Resend is working",
        html: "<p>If you received this, your Resend setup is correct.</p>",
    });

    return new Response("OK");
}