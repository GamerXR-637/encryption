const colors = {
  reset: "\x1b[0m",
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
};

/**
 * Truncates a string if it's longer than the specified number of characters,
 * appending "..." to the end.
 *
 * @param {string} [text] Input string
 * @param {number} [number=5] How long to slice the text?
 * @returns {string} The truncated string or the original string.
 */
function truncate(text, number = 5) {
  if (!text || text.length <= number) {
    return (
      text || `[${colors.red}Error${colors.reset}]: There was no string to cut!`
    );
  }
  return text.slice(0, number) + "...";
}

module.exports = { truncate };
