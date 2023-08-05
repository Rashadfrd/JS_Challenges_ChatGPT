// Write a function called jump that takes an array of non-negative integers where each element represents the maximum number of steps you can jump from that position. Your goal is to reach the last index in the minimum number of jumps.

// For example:

// jump([2, 3, 1, 1, 4]) should return 2 because you can jump from index 0 to index 1, then to the last index.
// jump([2, 3, 0, 1, 4]) should return 2 because you can jump from index 0 to index 1, then to the last index.


function jumpp(arr) {
  let firsElement = arr.shift()
  let sortedArr = arr.sort((a,b) => a - b )

  return sortedArr[sortedArr.length - 1] - firsElement
}
console.log(jumpp([3, 1, 4, 2, 1, 5, 7]))

//  GPT code

function jump(arr) {
  if (arr.length === 1) return 0;

  let maxReach = 0;
  let steps = 0;
  let end = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    maxReach = Math.max(maxReach, i + arr[i]);

    if (i === end) {
      end = maxReach;
      steps++;
    }
  }

  return steps + 1;
}