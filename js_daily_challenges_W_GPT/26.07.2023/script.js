// Longest Increasing Subsequence:
// Given an unsorted array of integers, find the length of the longest increasing subsequence. An increasing subsequence is a sequence of numbers where each element is greater than the previous one but not necessarily contiguous.

// Example:

// longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]);
// // Output: 6 (The longest increasing subsequence is [10, 22, 33, 50, 60, 80])

// My code

function longestIncreasingSubsequence(arr) {
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      arr.splice(i, 1);
    }
  }
  return arr.reverse();
}

// GPT code

function longestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

// ------------------------------------------------------------------------------------------------------------------------------------------

// Question: Write a function called findFirstNonRepeatingCharacter that takes a string as input and returns the first non-repeating character in the string. If there are no non-repeating characters in the string, the function should return null.

// Example:

// findFirstNonRepeatingCharacter("abacdbef"); // Output: 'e' (The first non-repeating character is 'e')
// findFirstNonRepeatingCharacter("aabbccddefg"); // Output: 'e' (The first non-repeating character is 'e')

// My obnoxious code

function findFirstNonRepeatingCharacter(str) {
  let arr = str.split('').sort();

  let count = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i+1]) {
      if(count == 0){
        return arr[i]
      }
      count = 0
    }
    else{
      count++
    }
  }

  return arr
}

// GPT code

function findFirstNonRepeatingCharacter(str) {
  const charCount = {};

  // Count the occurrences of each character in the string
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first non-repeating character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // Return null if there are no non-repeating characters
  return null;
}