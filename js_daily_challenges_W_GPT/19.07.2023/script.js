// Write a JavaScript function that takes an array of strings as input and returns a new array containing only the strings that have a length greater than or equal to 5 characters. The order of the strings should be maintained in the resulting array.

// For example:

// Input: ["apple", "banana", "orange", "kiwi", "melon"] -> Output: ["apple", "banana", "orange", "melon"]

// My code

function filterStringsByLength(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.filter((x) => x.trim().length > 4);
}

// GPT code

function filterStringsByLength(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.filter((word) => word.trim().length >= 5);
}

// ------------------------------------------------------------------------------------------------------------------------------------------

// Write a JavaScript function that takes an array of numbers as input and returns the sum of the squares of all the positive numbers in the array. If there are no positive numbers in the array, the function should return 0.

// For example:

// Input: [1, 2, 3, 4, 5] -> Output: 55 (1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 55)
// Input: [-1, -2, -3, -4, -5] -> Output: 0 (no positive numbers)

// My code

function sumOfPositiveSquares(arr) {
  if (arr.length === 0 || arr.filter((x) => x > 0).length === 0) {
    return 0;
  }
  let sum = 0;
  arr
    .filter((x) => x > 0)
    .forEach((item) => {
      sum += item * item;
    });
  return sum;
}

// GPT code

function sumOfPositiveSquares(arr) {
  return arr.reduce((sum, num) => {
    if (num > 0) {
      return sum + num * num;
    }
    return sum;
  }, 0);
}

// ------------------------------------------------------------------------------------------------------------------------------------------

// Write a JavaScript function that takes an array of numbers as input and returns the median value of the numbers. The median is the middle value when the numbers are sorted in ascending order. If the array has an odd number of elements, the median is the middle value. If the array has an even number of elements, the median is the average of the two middle values.

// For example:

// Input: [1, 2, 3, 4, 5] -> Output: 3 (middle value)
// Input: [1, 2, 3, 4] -> Output: 2.5 (average of middle values 2 and 3)

// My miserable code

function medianOfArray(arr) {
  if (arr.length === 0) {
    return 0;
  }

  if (arr.length % 2 !== 0) {
    return arr[(arr.length - 1) / 2];
  } else {
    return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
  }
}

// GPT code

function medianOfArray(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const sortedArr = arr.slice().sort((a, b) => a - b);
  const midIndex = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 !== 0) {
    return sortedArr[midIndex];
  } else {
    return (sortedArr[midIndex - 1] + sortedArr[midIndex]) / 2;
  }
}
