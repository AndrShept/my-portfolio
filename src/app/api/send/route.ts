import { EmailTemplate } from '@/components/EmailTamplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { email, subject, message } = body;
  try {
    const data = await resend.emails.send({
      from: 'portfolioCallBack <andriySheptyckiy@resend.dev>',
      to: ['lolokos1986@gmail.com'],
      subject: subject,
      react: EmailTemplate({  email,  text: message }),
      text: '',
    });

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
