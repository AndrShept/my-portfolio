
import { EmailTemplate } from '@/components/EmailTamplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:Request) {
    const body = await req.json()
    console.log(body)
  try {
    const data = await resend.emails.send({
      from: 'Andriy <lolokos1986@gmail.com>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
      text: ''
    });

    return NextResponse.json(data, {status: 200});
  } catch (error) {
    return NextResponse.json({ error });
  }
}
