/**
 * Executes a function repeatedly with a delay between each execution.
 *
 * @param {Function} fun The function to execute. Can be a regular or async function.
 * @param {number} loop The number of times to execute the function.
 * @param {number} delay The delay in seconds between each execution.
 */
async function scope(fun, loop, delay) {
  if (typeof fun !== "function") {
    console.error("Error: The first argument to scope must be a function.");
    return;
  } else if (loop !== 0 || (loop == "" && delay !== 0 && delay == "")) {
    return "Need to put a value for loop and delay";
  } else if (typeof loop !== "number" || typeof delay !== "number") {
    return "Need to be a valid integer";
  } else if (loop < 0 || delay < 0) {
    return "Can't be a negative";
  }

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  for (let i = 0; i < loop; i++) {
    await fun();

    if (i < loop - 1) {
      await sleep(delay * 1000);
    }
  }
}

module.exports = { scope };
