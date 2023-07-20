// Write a JavaScript function that takes a sorted array of numbers and a target number as input and returns the index of the target number in the array using binary search. If the target number is not found in the array, the function should return -1.

// Binary search is an efficient search algorithm that works on sorted arrays. It compares the target number with the middle element of the array and eliminates half of the search space in each iteration.

// For example:

// Input: [1, 3, 5, 7, 9, 11], target: 7 -> Output: 3 (index of 7 in the array)
// Input: [1, 3, 5, 7, 9, 11], target: 8 -> Output: -1 (8 is not in the array)

// My code

function binarySearch(arr, targetNum) {
  if (arr.length === 0) {
    return -1;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == targetNum) return mid;

    if (arr[mid] > targetNum) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

// GPT code

function binarySearch(arr, targetNum) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === targetNum) {
      return mid;
    }

    if (arr[mid] < targetNum) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Target number not found in the array
}

// -----------------------------------------------------------------------------------------------------------------------------------------
// Write a function that takes two strings as input and returns true if the two strings are anagrams of each other, and false otherwise. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// For example:

// Input: "listen", "silent" -> Output: true (listen and silent are anagrams)
// Input: "hello", "world" -> Output: false (hello and world are not anagrams)

// My miserable code

function anagramFinder(str1, str2) {
  if (str1.trim().length !== str2.trim().length) return false;

  let arr1 = str1.split("");
  let arr2 = str2.split("");
  let result = 0;

  for (let item of arr2) {
    if (arr1.includes(item)) result++;
  }

  return result == str1.length ? true : false;
}

// GPT code

function anagramChecker(str1, str2) {
  const cleanStr1 = str1.trim();
  const cleanStr2 = str2.trim();

  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}
