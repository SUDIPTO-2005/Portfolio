// @flow strict

import { NextResponse } from 'next/server';
import { verifyRecaptchaToken } from '@/server/services/recaptcha.service';

/**
 * Handles server-side Google reCAPTCHA verification.
 */
export async function POST(request) {
  try {
    const reqBody = await request.json();
    const result = await verifyRecaptchaToken(reqBody?.token);

    if (result.success) {
      return NextResponse.json({
        message: 'Captcha verification success!',
        success: true,
      });
    }

    return NextResponse.json(
      {
        error: result.error || 'Captcha verification failed.',
        success: false,
      },
      { status: 400 }
    );
  } catch (error) {
    console.error('[Recaptcha Controller Error]:', error.message);
    return NextResponse.json(
      {
        error: 'Captcha verification server error.',
        success: false,
      },
      { status: 500 }
    );
  }
}