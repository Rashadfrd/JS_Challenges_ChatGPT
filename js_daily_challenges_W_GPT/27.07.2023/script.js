// Write a function called arrayIntersection that takes two arrays as arguments and returns a new array containing their intersection. The intersection is the set of elements that are common to both arrays, without any duplicates.

// For example:

// arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]) should return [3, 4] because these are the common elements in both arrays.
// arrayIntersection(['a', 'b', 'c'], ['b', 'c', 'd']) should return ['b', 'c'] because these are the common elements in both arrays.

// My code

function arrayIntersection(arr1, arr2) {
  let commonArr = [...arr1, ...arr2];

  return commonArr.filter((x, i, a) => a.indexOf(x) !== i);
}

// GPT code

function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const intersection = [];

  for (const item of set1) {
    if (set2.has(item)) {
      intersection.push(item);
    }
  }

  return intersection;
}

// ------------------------------------------------------------------------------------------------------------------------------------------

// Write a function called factorial that takes a positive integer as an argument and returns its factorial. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.

// For example:

// factorial(5) should return 120 because 5! = 5 x 4 x 3 x 2 x 1 = 120.
// factorial(0) should return 1 because 0! is defined as 1.

// My code

function factorial(num) {
  let answer = 1;
  for (let i = 1; i <= num; i++) {
    answer *= i;
  }

  return answer;
}

// Come on GPT

function factorial(num) {
  if (typeof num !== "number" || num < 0 || !Number.isInteger(num)) {
    throw new Error("Factorial input must be a positive integer.");
  }

  let factorialResult = 1;
  for (let i = 1; i <= num; i++) {
    factorialResult *= i;
  }

  return factorialResult;
}

// ------------------------------------------------------------------------------------------------------------------------------------------

// Write a function called longestConsecutive that takes an array of integers as input and returns the length of the longest consecutive subsequence in the array. A consecutive subsequence is a sequence of consecutive integers, but the elements can be in any order. The subsequence should contain unique elements (no duplicates).

// For example:

// longestConsecutive([100, 4, 200, 1, 3, 2]) should return 4 because the longest consecutive subsequence is [1, 2, 3, 4].
// longestConsecutive([0, -1, 2, -2, 1, 3, -3]) should return 4 because the longest consecutive subsequence is [-3, -2, -1, 0, 1, 2, 3].

function longestConsecutive(arr) {
  if (arr.length === 0) return 0;

  let count = 1;
  let tempCounts = [];
  let array = arr.sort((a, b) => a - b).filter((x, i, a) => a.indexOf(x) == i);

  for (let i = 1; i < array.length; i++) {
    if (array[i] - array[i - 1] == 1) {
      count++;
    } else {
      if (count !== 0) {
        tempCounts.push(count);
        count = 1;
      }
    }
  }
  tempCounts.push(count);
  return tempCounts.sort((a, b) => a - b).pop();
}

// GPT code

function longestConsecutive(arr) {
  if (arr.length === 0) return 0;

  const numSet = new Set(arr);
  let longest = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longest = Math.max(longest, currentStreak);
    }
  }

  return longest;
}
