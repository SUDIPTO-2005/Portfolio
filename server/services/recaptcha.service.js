// @flow strict

import axios from 'axios';

/**
 * Verifies Google reCAPTCHA client token with Google Verification API.
 * @param {string} token
 * @returns {Promise<{ success: boolean, error?: string }>}
 */
export async function verifyRecaptchaToken(token) {
  const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY || process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.log('[RecaptchaService: Warning] Secret key not configured. Passing in dev mode.');
    return { success: true };
  }

  if (!token) {
    return { success: false, error: 'reCAPTCHA token is missing.' };
  }

  try {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
    const response = await axios.post(url);

    if (response.data?.success) {
      return { success: true };
    }

    return {
      success: false,
      error: response.data?.['error-codes']?.join(', ') || 'Captcha verification failed.',
    };
  } catch (error) {
    console.error('[RecaptchaService Error]:', error.message);
    return { success: false, error: error.message };
  }
}
