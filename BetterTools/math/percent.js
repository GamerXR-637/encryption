/**
 * Calculates the percent of a ratio
 *
 * @param {number} [numerator=4] - The numerator value.
 * @param {number} [denominator=3] - The denominator value.
 * @returns {Array<number>} An array where the first element is the percentage value
 * @example
 * percent(1, 4); // Returns [25, 100]
 * percent(5, 10); // Returns [50, 100]
 */

function percent(numerator = 4, denominator = 3) {
  if (denominator === 0) {
    return "Error: Denominator cannot be zero.";
  }
  const percentageValue = (numerator / denominator) * 100;
  return [percentageValue, 100];
}

module.exports = { percent };
