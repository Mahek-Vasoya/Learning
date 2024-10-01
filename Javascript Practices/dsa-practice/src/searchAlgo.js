console.log("Start Search Alogorithm");
// Linear Search
// Big O => O(n)
// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
// var a = [1, 4, 7, 8, 9, 23, 4];
// console.log(linearSearch(a, 19)); // -1
// console.log(linearSearch(a, 8)); // 3
// console.log(linearSearch(a, 5)); // -1

// Binary Search
// it's only works on sorted array
// Big O -> O (log  n)
// function binarySearch(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length;
//   while (rightIndex > leftIndex) {
//     const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (target === arr[middleIndex]) {
//       return middleIndex;
//     }
//     if (target < arr[middleIndex]) rightIndex = middleIndex - 1;
//     else leftIndex = middleIndex + 1;
//   }
//   return -1;
// }
// var b = [1, 4, 7, 8, 9, 12, 18];

// console.log(binarySearch(b, 4)); // 1
// console.log(binarySearch(b, 3)); // -1
// console.log(binarySearch(b, 12)); // 5
// console.log(binarySearch(b, 10)); // -1

// Recurcive BinarySearch
// Big O -> O(log n)
// function recBinarySearch(arr, target) {
//   return search(arr, target, 0, arr.length - 1);
// }

// function search(arr, target, leftIndex, rightIndex) {
//   if (leftIndex > rightIndex) {
//     return -1;
//   }
//   const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//   if (target === arr[middleIndex]) {
//     return middleIndex;
//   }
//   if (target < arr[middleIndex]) {
//     return search(arr, target, leftIndex, middleIndex - 1);
//   } else {
//     return search(arr, target, middleIndex + 1, rightIndex);
//   }
// }
// var rb = [1, 4, 7, 8, 9, 12, 18];
// console.log(recBinarySearch(rb, 4)); // 1
// console.log(recBinarySearch(rb, 3)); // -1
// console.log(recBinarySearch(rb, 12)); // 5
// console.log(recBinarySearch(rb, 10)); // -1

// console.log("End Search Alogorithm");
