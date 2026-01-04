import { Github, Linkedin, Twitter } from "lucide-react";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    } as SMTPTransport.Options);
    const sendAdminManil = () =>
      transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.SEND_TO,
        subject: `New message from ${name}`,
        html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      });

    const sendUserConfirmationMail = () =>
      transporter.sendMail({
        from: `"Aryan Raj <${process.env.EMAIL_USER}>"`,
        to: email,
        subject: "Thanks for contacting me!",
        html: `
<div style="max-width:600px;margin:40px auto;background:#ffffff;padding:24px 20px;border-radius:10px;font-family:Arial,Helvetica,sans-serif;color:#111;">
  
  <!-- Top bar -->
  <div style="width:60px;height:4px;background:#f97316;border-radius:4px;margin:0 auto 20px;"></div>

  <!-- Heading -->
  <h2 style="text-align:center;font-size:22px;margin:0;">
    Thank you for connecting.
  </h2>
  <h3 style="text-align:center;font-size:20px;margin:6px 0 20px;font-weight:600;">
    Looking forward to our next step
  </h3>

  <!-- Message -->
  <p style="font-size:14px;line-height:1.6;color:#333;text-align:center;margin-bottom:24px;">
    I appreciate you reaching out and sharing your thoughts.
    I’ve received your message and I’m excited about the possibility
    of collaborating. I’m available to discuss next steps.
  </p>

  <!-- CTA -->
  <div style="text-align:center;margin:30px 0;">
    <a href="tel:+917004659504"
       style="display:inline-block;padding:12px 22px;background:#f97316;color:#000;text-decoration:none;border-radius:999px;font-size:14px;font-weight:600;">
      Schedule a Call
    </a>
  </div>

  <!-- Divider -->
  <hr style="border:none;border-top:1px solid #e5e7eb;margin:30px 0;" />

  <!-- Footer -->
  <div style="font-size:13px;color:#555;line-height:1.6;">
    <strong>Aryan Raj</strong><br/>
    Full Stack Web Developer<br/><br/>

    📞 +91 70046 59504<br/>
    📍 Noida, UP, 201301
  </div>

  <!-- Social links -->
  <div style="margin-top:20px;">
    <a href="https://github.com/aryanraj07" style="margin-right:12px;color:#f97316;text-decoration:none;">GitHub</a>
    <a href="https://www.linkedin.com/in/aryanraj07" style="margin-right:12px;color:#f97316;text-decoration:none;">LinkedIn</a>
    <a href="https://x.com/aryan314587" style="color:#f97316;text-decoration:none;">Twitter</a>
  </div>
</div>
`,
      });
    await Promise.all([sendAdminManil(), sendUserConfirmationMail()]);
    return Response.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Email error:", err);

    return Response.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
