// Write a JavaScript function that takes an array of numbers as input and returns the sum of all the positive numbers in the array. If the array is empty or contains no positive numbers, the function should return 0.

// My useless code
function sum(arr) {
  let positiveSum = 0;

  if (arr.length == 0) {
    return 0;
  }
  arr.forEach((item) => {
    if (item > 0) {
      positiveSum += item;
    }
  });
  if (positiveSum == 0) {
    return 0;
  }
  return positiveSum;
}

// GPT answer :D
function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const positiveSum = arr.reduce((acc, item) => {
    if (item > 0) {
      return acc + item;
    }
    return acc;
  }, 0);

  return positiveSum === 0 ? 0 : positiveSum;
}

// Write a JavaScript function that takes a string as input and returns the reverse of that string. For example, if the input string is "Hello, World!", the function should return "!dlroW ,olleH".

// The same

function reverse(str) {
  return str.split("").reverse().join("");
}

// Write a JavaScript function that takes an array of numbers as input and returns a new array containing only the even numbers from the original array. For example, if the input array is [1, 2, 3, 4, 5, 6], the function should return [2, 4, 6].

// My useless code

function evenNums(arr) {
  let evenArr = [];

  arr.forEach((item) => {
    if (item % 2 == 0) {
      evenArr.push(item);
    }
  });
  return evenArr;
}

// GPT answer :D

function evenNums(arr) {
  return arr.filter((item) => item % 2 === 0);
}

//   Write a JavaScript function that takes a string as input and determines if it is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, disregarding spaces, punctuation, and capitalization. The function should return true if the input string is a palindrome and false otherwise.

// For example:

// Input: "racecar" -> Output: true
// Input: "hello" -> Output: false

function palindromeDetector(str) {
  const strReversed = str.split("").reverse().join("");
  return str === strReversed;
}

//   Write a JavaScript function that takes a number as input and determines if it is a prime number. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. The function should return true if the input number is prime and false otherwise.

// My useless code

function primeNumDetector(num) {
  if (num < 2) return false;

  let counter = 1;

  for (let i = 2; i <= num; i++) {
    if (num % i == 0) {
      counter++;
    }
  }

  return counter > 2 ? false : true;
}

// GPT code

function primeNumDetector(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Write a JavaScript function that takes a sentence as input and returns the longest word in that sentence. If there are multiple longest words, the function should return the first occurrence. A word is defined as a sequence of non-space characters.

// For example:

// Input: "The quick brown fox" -> Output: "quick"
// Input: "The longest word is hello" -> Output: "longest"

// My first useless code

function longestWord(str) {
  let arr = str.split(" ");

  let longest = arr[0];

  arr.forEach((item) => {
    if (item.length > longest.length) {
      longest = item;
    }
  });
  return longest;
}
// My second and less useless code

function longestWord2(str) {
  let arr = str.split(" ");

  return arr.sort((a, b) => {
    return b.length - a.length;
  })[0];
}

// GPT answer

function longestWord2(str) {
  const words = str.split(" ");

  return words.reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
}
