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

## Unique words

Given an array of strings return a copy which contains only unique words. For example, if "cat" was an element twice, it should only appear once.

## Object sorting

Consider the following JSON array:

```js
[
    {
        name: "Catty",
        favouriteToy: "ball"
    },
    {
        name: "Gingerpuss",
        favouriteToy: "string"
    },
    {
        name "Betty",
        favouriteToy: "mice"
    }
]
```

Sort the array so that the cats are alphabetically ordered by name in ascending order.

Additionally in another function convert each element in the array into a sentence in the form `"Catty's favourite toy is the ball"`, and return this as an array.

## Cat retrieval

Consider the following JSON arrays:

```js
const cats = [
    {
        id: 55,
        name: "Catty",
        owner: "Suzanna"
    },
    {
        id: 22,
        name: "Gingerpuss",
        owner: "Bob"
    },
    {
        id: 37,
        name "Betty",
        owner: "Jerry"
    }
]
const humans = [
    {
        name: "Suzanna",
        hobbies: [
            "Cooking",
            "Running"
        ]
    }
    {
        name: "Jerry",
        hobbies: [
            "Shooting",
            "Fishing"
        ]
    }
]
```

1. Create a function with the signature below which returns `null` if a cat does not exist with the given ID or the cat object if it does. Implement this using a dictionary to lookup the cat ID.

```js
function getCat(id);
```

2. Because your cat retrieval service might need to search millions of cats one day, writing performant code is a big consideration. This means that choosing between a dictionary/array/set can sometimes have a big impact on speed. Although this doesn't usually matter, it can be helpful to know when speeding up bottlenecks in an application.

Looking at the [Big-O complexity](https://www.bigocheatsheet.com/), explain why a dictionary (hash-table) will perform better than an array when millions of cats are being searched. Is there any advantage to using an array for other reasons?

3. Write a function called `function getOwnerByCatId(id)` which retrieves a cat's owner by the cat's ID, or `null` if the cat or human does not exist.


