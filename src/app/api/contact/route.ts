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
<div class="mx-auto max-w-4xl bg-black text-white px-6 py-10 font-sans">
  
  <!-- Header -->
  <div class="space-y-6 text-center">
    <div class="mx-auto h-1 w-20 bg-primary rounded"></div>

    <div class="text-3xl md:text-4xl font-bold leading-tight">
      <h2>Thank you for connecting.</h2>
      <h2 class="mt-2">Looking forward to our next step</h2>
    </div>

    <p class="text-gray-300 max-w-2xl mx-auto">
      I appreciate you reaching out and sharing your thoughts.
      I’ve received your message and I’m excited about the possibility
      of collaborating. I’m available to discuss next steps.
    </p>

    <!-- CTA -->
    <div class="flex justify-center">
      <a href="tel:+917004659504" class="inline-block">
        <button class="px-6 py-3 text-sm font-medium rounded-full bg-primary text-black">
          Schedule a call
        </button>
      </a>
    </div>
  </div>

  <!-- Divider -->
  <div class="my-10 h-px w-full bg-primary/40"></div>

  <!-- Footer -->
  <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
    
    <!-- Left -->
    <div class="space-y-2">
      <h3 class="text-lg font-semibold">Aryan Raj</h3>
      <p class="text-sm text-gray-400">Full Stack Web Developer</p>

      <div class="flex items-center gap-2 text-sm">
        <span>📞</span>
        <span>+91 70046 59504</span>
      </div>

      <div class="flex items-center gap-2 text-sm">
        <span>📍</span>
        <span>Noida, UP, 201301</span>
      </div>
    </div>

    <!-- Right (Socials) -->
    <div class="flex items-center gap-4">
      ${[
        {
          icon: Github,
          href: "https://github.com/aryanraj07",
          label: "GitHub",
        },
        {
          icon: Linkedin,
          href: "www.linkedin.com/in/aryanraj07",
          label: "LinkedIn",
        },
        { icon: Twitter, href: "https://x.com/aryan314587", label: "Twitter" },
      ]
        .map(
          (s) => `
        <a href="${s.href}" aria-label="${s.label}"
           class="inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary/30">
          <span>${s.label}</span>
        </a>`
        )
        .join("")}
    </div>
  </div>
</div>
`,
      });
    await Promise.all([sendAdminManil(), sendUserConfirmationMail]);
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
