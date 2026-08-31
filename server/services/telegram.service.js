// @flow strict

import axios from 'axios';

/**
 * Sends real-time notification to Telegram bot if credentials are provided.
 * @param {{ name: string, email: string, message: string }} payload
 * @returns {Promise<boolean>}
 */
export async function sendTelegramNotification(payload) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return false;
  }

  const { name, email, message } = payload;
  const text = `📬 *New Portfolio Message!*\n\n👤 *From:* ${name}\n📧 *Email:* ${email}\n\n💬 *Message:*\n${message}`;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    const response = await axios.post(url, {
      chat_id: chatId,
      text,
      parse_mode: 'Markdown',
    });
    return response.data?.ok === true;
  } catch (error) {
    console.error('[TelegramService Error]:', error.response?.data || error.message);
    return false;
  }
}
