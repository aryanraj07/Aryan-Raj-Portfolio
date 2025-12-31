import nodemailer from "nodemailer";
export async function POST(req) {
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
    });
    await transporter.sendMail({
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
