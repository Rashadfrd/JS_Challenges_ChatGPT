// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to the target. You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example:

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: nums[0] + nums[1] equals 9, so the function should return [0, 1].

// My code

function findIndicesWithSum(arr, targetNum) {
  if (arr.length === 0 || arr.filter((x) => x <= 9).length < 2) return false;

  for (let item of arr.filter((x) => x <= 9)) {
    if (arr.includes(targetNum - item)) {
      return [arr.indexOf(item), arr.indexOf(targetNum - item)];
    }
  }
  return false;
}

// GPT code

function findIndicesWithSum(arr, targetNum) {
  const numIndicesMap = {};

  for (let i = 0; i < arr.length; i++) {
    const complement = targetNum - arr[i];

    if (numIndicesMap.hasOwnProperty(complement)) {
      return [numIndicesMap[complement], i];
    }

    numIndicesMap[arr[i]] = i;
  }

  return [];
}

// ------------------------------------------------------------------------------------------------------------------------------------------

// Given a string 'str', find the length of the longest substring without repeating characters.

// Example:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The longest substring without repeating characters is "abc", which has a length of 3.

// That's my code that made GPT go crazy... After 20 minutes of reviewing stupid ai agrees this is also right way lol :D

function lengthOfLongestSubstring(str) {
  let arr = str.split('')
  let uniqueChars = new Set()

  for (let char of arr) {
    uniqueChars.add(char)
  }
  return [...uniqueChars].length
}


// GPT code

function lengthOfLongestSubstring(s) {
  const n = s.length;
  const charMap = new Map();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < n; right++) {
    const currentChar = s[right];

    if (charMap.has(currentChar) && charMap.get(currentChar) >= left) {
      left = charMap.get(currentChar) + 1;
    }

    charMap.set(currentChar, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}






// STOCK------------------------------------------------

