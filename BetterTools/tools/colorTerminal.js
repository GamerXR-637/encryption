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
 * Console Log in color
 * black, red, green, yellow, blue, magenta, cyan, white
 *
 * @param {string} [color] The color of the text?
 * @param {string} [text] Input string
 */
function colorTerminal(text, color) {
  if (text && colors[color]) {
    console.log(`${colors[color]}${text}${colors.reset}`);
  } else if (text) {
    console.log(text);
  }
}

module.exports = { colorTerminal };
