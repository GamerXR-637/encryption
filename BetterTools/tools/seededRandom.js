/**
 * Generates a pseudo-random number based on a seed value.
 *
 * @param {number} [number=637] The seed value for the random generator. Defaults to 637.
 * @returns {number} A pseudo-random number between 0 (inclusive) and 1 (exclusive).
 */
function seededRandom(seed = 637) {
  let currentSeed = seed % 2147483647;
  if (currentSeed <= 0) {
    currentSeed += 2147483646;
  }
  currentSeed = (currentSeed * 16807) % 2147483647;
  return (currentSeed - 1) / 2147483646;
}

module.exports = { seededRandom };
