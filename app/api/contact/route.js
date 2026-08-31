// @flow strict

import { NextResponse } from 'next/server';
import { validateContactPayload } from '@/server/validations/contact.schema';
import { sendInquiryEmail } from '@/server/services/mail.service';
import { sendTelegramNotification } from '@/server/services/telegram.service';

/**
 * Handles contact form POST submissions.
 * Orchestrates validation, email dispatch, and Telegram alerts.
 */
export async function POST(request) {
  try {
    const body = await request.json();

    // 1. Backend Input Validation
    const validation = validateContactPayload(body);
    if (!validation.isValid || !validation.sanitized) {
      return NextResponse.json(
        { success: false, message: validation.error || 'Invalid form input.' },
        { status: 400 }
      );
    }

    const payload = validation.sanitized;

    // 2. Dispatch Telegram Notification (Non-blocking background alert)
    sendTelegramNotification(payload).catch((err) =>
      console.warn('[Telegram Alert Failed]:', err.message)
    );

    // 3. Send HTML Email via Nodemailer Gmail Transport
    const mailResult = await sendInquiryEmail(payload);

    if (!mailResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Unable to deliver message right now. Please email directly at sdptbhdr@gmail.com',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contact Controller Error]:', error.message);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error occurred. Please try emailing directly!',
      },
      { status: 500 }
    );
  }
}