// Write a function called flattenArray that takes a nested array of integers as input and returns a new flat array containing all the elements of the nested arrays. The input array may contain multiple levels of nesting.
// Example: flattenArray([1, [2, 3], [4, [5, 6]], 7]); // Output: [1, 2, 3, 4, 5, 6, 7]

// My code that everyone must laugh :D

function flattenArray(arr) {
  if (arr.length === 0) return 0;

  let flatArr = [];

  function isArray(arr) {
    for (const item of arr) {
      if (Array.isArray(item)) {
        isArray(item);
      } else {
        flatArr.push(item);
      }
    }
  }

  for (const item of arr) {
    if (Array.isArray(item)) {
      isArray(item);
    } else {
      flatArr.push(item);
    }
  }

  return flatArr;
}

// GPT answer :DDDDDDDDDDD

function flattenArray(arr) {
  if (arr.length === 0) return [];

  return arr.flat(Infinity);
}

// ------------------------------------------------------------------------------------------------------------------------------------------

// Write a function called hasUniqueCharacters that takes a string as input and returns true if the string contains only unique characters (i.e., no character is repeated), and false otherwise.

// Example:
// hasUniqueCharacters("hello"); // Output: false
// hasUniqueCharacters("world"); // Output: true

// My code

function hasUniqueCharacters(str) {
  let uniqueArr = new Set(str.split(""));
  return uniqueArr.size === str.length ? true : false;
}

// GPT code

function hasUniqueCharacters(str) {
  const uniqueChars = new Set(str.split(""));
  return uniqueChars.size === str.length;
}
