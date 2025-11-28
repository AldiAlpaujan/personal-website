import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message }: { name: string; email: string; message: string } =
      await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'aldi.m.alpaujan.2@gmail.com',
      subject: `New Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message:
${message}
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Resend Error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
