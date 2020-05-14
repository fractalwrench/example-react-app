# Challenges

You should create a new branch and open a separate pull request on GitHub for every single challenge you complete.

When you complete a challenge it should have unit tests to verify that the solution works.

This may seem like overkill, but will you get into good habits :)

## Odd and Even

Write a function named `isOdd(n)` which returns true if a number is odd, and a converse function named `isEven(n)`.

## Remainder

Write a function named `remainder(n, x)`, where n is a number, and x is the denominator. The function should return the remainder of the division.

## Primes

Write a function named `isPrime(n)` which returns true if a number is a prime number. You should verify that this works for integers from 1-100. It's ok to use a [brute-force algorithm](https://en.wikipedia.org/wiki/Brute-force_attack) for this challenge.

## Eratosthenes Sieve

Write a function named `isPrime(n)` which returns true if a number is a prime. You should use an [Eratosthenes sieve](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) to calculate this efficiently, and verify that this works for at least 5 integers >1,000,000.

## Fibonacci Sequence (recursive)

Write a function named `generateFibonacciRecursive(n)` to generate the nth integer in the [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_number). You should use [recursion](https://en.wikipedia.org/wiki/Recursion) when implementing your solution.

## Fibonacci Sequence (iterative)

Recursive functions can [always be refactored to use an iterative solution](https://stackoverflow.com/questions/931762/can-every-recursion-be-converted-into-iteration) instead.

With this in mind, create a new function named `generateFibonacciIterative(n)` to generate the nth integer in the [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_number). You should use iteration to implement your solution.

What are the advantages and disadvantages of iteration vs recursion? Think about the complexity of the code and the amount of computational resources required for each solution, and feel free to Google.

## Palindrome

Write a function which returns true if a string is a [palindrome](https://en.wikipedia.org/wiki/Palindrome). For example, "Abba" is a palindrome, and "Aboriginal" is not.

## Unique characters

Write a function which returns true if a string consists of unique characters. For example, "abc" has 3 unique characters, and "aaa" does not.

## Fizz Buzz

Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz".

