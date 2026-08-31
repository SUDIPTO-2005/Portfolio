// @flow strict

/**
 * Formats an ISO date string into a human readable format (e.g. '15 Aug 2026')
 * @param {string} isoString
 * @returns {string}
 */
export function formatDisplayDate(isoString) {
  if (!isoString) return '';
  const date = new Date(isoString);
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
