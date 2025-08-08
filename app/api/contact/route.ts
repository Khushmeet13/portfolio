import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();
  console.log("Message received:", body);
  const { name, email, message } = body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // App password (NOT your Gmail password!)
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // where the email goes
      subject: `New Message from ${name}`,
      text: `
      You received a new message from your portfolio contact form:

      Name: ${name}
      Email: ${email}
      Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Email send error:', error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
    console.error('Unexpected error:', error);
    return NextResponse.json({ success: false, error: 'Unknown error occurred' }, { status: 500 });
  }
}
