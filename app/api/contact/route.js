import { personalData } from '@/utils/data/personal-data';
import axios from 'axios';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Helper function to send a message via Telegram
async function sendTelegramMessage(token, chat_id, message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await axios.post(url, {
      text: message,
      chat_id,
    });
    return res.data?.ok;
  } catch (error) {
    console.error('Telegram notification skipped/error:', error.response?.data || error.message);
    return false;
  }
}

// HTML email template
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #1a1a1a; padding: 24px; background-color: #0b0f24;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 28px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #7c3aed; margin-top: 0;">Portfolio Message for ${personalData.name}</h2>
      <p style="font-size: 15px; margin-bottom: 8px;"><strong>From:</strong> ${name}</p>
      <p style="font-size: 15px; margin-bottom: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0284c7;">${email}</a></p>
      <div style="background-color: #f8fafc; border-left: 4px solid #16f2b3; padding: 14px; border-radius: 6px; margin: 16px 0;">
        <p style="margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${userMessage}</p>
      </div>
      <p style="font-size: 12px; color: #64748b; margin-top: 24px;">You can reply directly to this email to respond to ${name}.</p>
    </div>
  </div>
`;

// Helper function to send an email via Nodemailer
async function sendEmail(payload, message) {
  const { name, email, message: userMessage } = payload;
  const user = process.env.EMAIL_ADDRESS || personalData.email;
  const pass = process.env.GMAIL_PASSKEY?.replace(/\s+/g, "");

  if (!user || !pass) {
    console.log('[Contact Form] GMAIL_PASSKEY not provided. Message logged:', { name, email, message: userMessage });
    return true; // Graceful success in dev mode
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });

  const mailOptions = {
    from: `"Portfolio Contact - ${name}" <${user}>`,
    to: personalData.email,
    subject: `New Portfolio Message from ${name}`,
    text: message,
    html: generateEmailTemplate(name, email, userMessage),
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error.message);
    return false;
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;

    if (!name || !email || !userMessage) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;

    const message = `📬 New Portfolio Message for ${personalData.name}!\n\n👤 From: ${name}\n📧 Email: ${email}\n\n💬 Message:\n${userMessage}\n`;

    // 1. Send Telegram message if configured
    if (token && chat_id) {
      await sendTelegramMessage(token, chat_id, message);
    }

    // 2. Send Email via Nodemailer if configured
    await sendEmail(payload, message);

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error.message);
    return NextResponse.json(
      {
        success: false,
        message: 'Server error occurred. Please try emailing directly!',
      },
      { status: 500 }
    );
  }
}