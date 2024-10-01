// Given an integer array, print all subarrays with zero-sum in less than O(n^2) complexity.
// Input:  { 4, 2, -3, -1, 0, 4 }
// Subarrays with zero-sum are
// { -3, -1, 0, 4 }
// { 0 }
// Input:  { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }
// Subarrays with zero-sum are
// { 3, 4, -7 }
// { 4, -7, 3 }
// { -7, 3, 1, 3 }
// { 3, 1, -4 }
// { 3, 1, 3, 1, -4, -2, -2 }
// { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }

// function printSubarraysWithZeroSum(arr) {
//   const map = new Map();
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];

//     if (sum === 0) {
//       console.log(arr.slice(0, i + 1));
//     }

//     if (map.has(sum)) {
//       const indices = map.get(sum);
//       for (const index of indices) {
//         console.log(arr.slice(index + 1, i + 1));
//       }
//       indices.push(i);
//     } else {
//       map.set(sum, [i]);
//     }
//   }
// }

// Example usage:
// const input = [4, 2, -3, -1, 0, 4];
// const input = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];
// printSubarraysWithZeroSum(input);

// ------------------------------------------------------------

// Arrange given numbers to form the biggest number
// Example

// [54, 546, 548, 60] → 6054854654
// [1, 34, 3, 98, 9, 76, 45, 4] → 998764543431

// function compareNumbers(a, b) {
//   const num1 = a.toString() + b.toString();
//   const num2 = b.toString() + a.toString();
//   console.log(a, b, num1, num2, num1 - num2);
//   return num2 - num1;
// }

// function arrangeNumbersToFormBiggestNumber(numbers) {
//   numbers.sort(compareNumbers);
//   console.log(numbers);
//   return numbers.join("");
// }

// Example usage:
// const input = [54, 546, 548, 60];
// const output = arrangeNumbersToFormBiggestNumber(input);
// console.log(output);
// const input1 = [1, 34, 3, 98, 9, 76, 45, 4];
// const output1 = arrangeNumbersToFormBiggestNumber(input1);
// console.log(output1);
