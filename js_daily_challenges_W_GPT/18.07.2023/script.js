// Write a JavaScript function that takes an array of integers as input and returns an array containing only the unique elements from the original array. The order of the elements in the resulting array should be the same as the order of their first occurrence in the original array.

// For example:

// Input: [1, 2, 3, 2, 4, 5, 3, 1] -> Output: [1, 2, 3, 4, 5]
// Input: [5, 5, 5, 5, 5] -> Output: [5]

// My useless code

function uniqeArr(arr) {
  let newArr = new Set();
  arr.forEach((item) => {
    newArr.add(item);
  });

  return newArr;
}

// GPT code

function uniqueArr(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// ------------------------------------------------------------------------------------------------------------------------------------------

// Write a JavaScript function that takes a string as input and returns the count of each character in the string. The function should return an object where each key represents a unique character in the string, and the corresponding value represents the count of that character.

// For example:

// Input: "hello" -> Output: { h: 1, e: 1, l: 2, o: 1 }

// My miserable code :D

function strCount(str) {
  let count = 0;
  let obj = {};
  let tempChar = "";
  for (let i = 0; i < str.length; i++) {
    count = 0;
    tempChar = str[i];
    for (let k = 0; k < str.length; k++) {
      if (str[i] === str[k]) {
        count++;
      }
    }
    obj = {
      ...obj,
      [tempChar]: count,
    };
  }

  return obj;
}

// GPT code

function strCount(str) {
  let obj = {};

  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }

  return obj;
}

//   ----------------------------------------------------------------------------------------------------------------------------------------

// Write a JavaScript function that takes an array of numbers as input and returns the sum of the two largest numbers in the array.

// For example:

// Input: [1, 2, 3, 4, 5] -> Output: 9 (sum of 4 and 5)

// My useless code

function largestNumsSum(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 2] + arr[arr.length - 1];
}

// GPT code

function largestNumsSum(arr) {
  let largest1 = -Infinity;
  let largest2 = -Infinity;

  for (let num of arr) {
    if (num > largest1) {
      largest2 = largest1;
      largest1 = num;
    } else if (num > largest2) {
      largest2 = num;
    }
  }

  return largest1 + largest2;
}

