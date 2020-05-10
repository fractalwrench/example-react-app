const sum = require('./sum');


/**
 * This is an example of a JS unit test using the Jest testing framework: https://jestjs.io/docs/en/using-matchers
 * 
 * The test's purpose is to verify that an individual unit of functionality behaves as expected.
 * In this case the test is asserting that the sum() method performs addition correctly,
 * and is able to handle unusual input such as null/undefined.
 * 
 * The test is largely broken into two parts:
 * 
 * 1. The expectation under test - e.g. invoking sum(2 + 2)
 * 2. A matcher (or multiple matchers) which verifies the return value matches what is expected.
 */

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adding negative numbers works', () => {
    expect(sum(-3, 15)).toBe(12);
});

test('adding non-integer values', () => {
    expect(sum(7.2, 5.4)).toBeCloseTo(12.6);
});

test('passing null values returns -1', () => {
    expect(sum(null, 5)).toBe(-1);
});


/**
 * Exercise 1: Try implementing unit tests for the multiply() method.
 * 
 * The multiply method has a couple of bugs left by the author. Try writing
 * the unit tests to verify the behaviour fails, and then fix the implementation
 * so that the tests pass.
 */
test('adds 1 * 2 equals 2', () => {
    throw new Error("TODO: implement test");
});

test('multiplying negative numbers works', () => {
    throw new Error("TODO: implement test");
});

test('multiplying non-integer values', () => {
    throw new Error("TODO: implement test");
});

test('passing null values returns -1', () => {
    throw new Error("TODO: implement test");
});


/**
 * Exercise 2: Implement a subtract() method which takes two parameters and returns the value 
 * when the second parameter is subtracted from the first.
 * 
 * In addition to the 4 test cases used for the sum() tests, try to think of some unusual
 * inputs that might make the function fail or return an unexpected output, and write test cases
 * to verify the behaviour for these. For example, what happens when an array/object is passed
 * as a parameter instead, or when the numeric value is unusual in some way?
 */
