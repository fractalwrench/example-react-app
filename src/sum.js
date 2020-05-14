
/**
 * Adds two numbers together and returns their sum.
 * 
 * @param {the first number} a 
 * @param {the second number} b 
 */
function sum(a, b) {
  if (a === null || b == null) {
      return -1; // invalid arguments
  }
  return a + b;
}

/**
 * Multiplies two numbers together.
 * 
 * @param {the first number} a 
 * @param {the second number} b 
 */
function multiply(a, b) {
  if (a === null || b == null) {
    return -1; // invalid arguments
  }
  return a * b;
}

/** 
 * Subtracts the second number from the first.
 * 
 * @param {the first number} a 
 * @param {the second number} b 
 */

 function subtract (a, b) {
   if (typeof a != "number" || typeof b != "number") {
    return "error"; // invalid arguments
  }
  return a - b;
 }


 export { sum, multiply, subtract };