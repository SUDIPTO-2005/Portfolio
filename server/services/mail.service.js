// @flow strict

import { personalData } from '@/data/personal.data';
import nodemailer from 'nodemailer';

/**
 * Generates responsive branded HTML email template for contact form messages.
 */
function buildHtmlEmailTemplate(name, email, message) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Portfolio Message</title>
    </head>
    <body style="margin:0; padding:24px; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color:#080c1b; color:#ffffff;">
      <div style="max-width:600px; margin:0 auto; background-color:#0d122b; border:1px solid #1e293b; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.5);">
        
        <!-- Header -->
        <div style="background:linear-gradient(135deg, #1a1443 0%, #0d122b 100%); padding:24px; border-bottom:1px solid #1e293b;">
          <h2 style="margin:0; font-size:20px; font-weight:700; color:#16f2b3;">
            📬 New Inquiry for ${personalData.name}
          </h2>
          <p style="margin:6px 0 0; font-size:13px; color:#94a3b8;">
            Received from portfolio contact terminal
          </p>
        </div>

        <!-- Body -->
        <div style="padding:24px;">
          <div style="margin-bottom:18px;">
            <p style="margin:0 0 4px; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:0.5px; color:#64748b;">Sender Name</p>
            <p style="margin:0; font-size:16px; font-weight:600; color:#f8fafc;">${name}</p>
          </div>

          <div style="margin-bottom:20px;">
            <p style="margin:0 0 4px; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:0.5px; color:#64748b;">Sender Email</p>
            <p style="margin:0; font-size:15px; color:#38bdf8;">
              <a href="mailto:${email}" style="color:#38bdf8; text-decoration:none;">${email}</a>
            </p>
          </div>

          <div style="margin-top:20px;">
            <p style="margin:0 0 8px; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:0.5px; color:#64748b;">Message Content</p>
            <div style="background-color:#080c1b; border:1px solid #1e293b; border-left:4px solid #16f2b3; padding:16px; border-radius:8px; font-size:14px; line-height:1.6; color:#e2e8f0; white-space:pre-wrap;">${message}</div>
          </div>
        </div>

        <!-- Footer -->
        <div style="padding:16px 24px; background-color:#080c1b; border-top:1px solid #1e293b; text-align:center;">
          <p style="margin:0; font-size:12px; color:#64748b;">
            Reply directly to this email to contact <strong>${name}</strong> (${email}).
          </p>
        </div>

      </div>
    </body>
  </html>
  `;
}

/**
 * Sends contact inquiry email via Nodemailer Gmail transport.
 * @param {{ name: string, email: string, message: string }} payload
 * @returns {Promise<{ success: boolean, messageId?: string, error?: string }>}
 */
export async function sendInquiryEmail(payload) {
  const { name, email, message } = payload;
  const user = process.env.EMAIL_ADDRESS || personalData.email;
  const pass = process.env.GMAIL_PASSKEY?.replace(/\s+/g, '');

  if (!user || !pass) {
    console.log('[MailService: Dev Mode] GMAIL_PASSKEY not configured. Mocking dispatch:', { name, email });
    return { success: true };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });

  const mailOptions = {
    from: `"Portfolio Contact - ${name}" <${user}>`,
    to: personalData.email,
    replyTo: email,
    subject: `🚀 Portfolio Message from ${name}`,
    text: `Sender: ${name} (${email})\n\nMessage:\n${message}`,
    html: buildHtmlEmailTemplate(name, email, message),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('[MailService Error]:', error.message);
    return { success: false, error: error.message };
  }
}
