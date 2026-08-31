// @flow strict

/**
 * Validates and sanitizes contact form input payload.
 * @param {{ name?: string, email?: string, message?: string }} payload
 * @returns {{ isValid: boolean, error?: string, sanitized?: { name: string, email: string, message: string } }}
 */
export function validateContactPayload(payload) {
  if (!payload || typeof payload !== 'object') {
    return { isValid: false, error: 'Invalid request body' };
  }

  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';

  if (!name || name.length < 2) {
    return { isValid: false, error: 'Please enter a valid name (at least 2 characters).' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address.' };
  }

  if (!message || message.length < 5) {
    return { isValid: false, error: 'Please enter a message (at least 5 characters).' };
  }

  return {
    isValid: true,
    sanitized: {
      name,
      email,
      message,
    },
  };
}
