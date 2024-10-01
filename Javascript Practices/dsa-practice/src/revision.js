// Sorting
// const unSortedArray = [4, 6, 8, 2, 4, 11, 1, 3, 9, 7, 14, 12];
// Buble Sort
// Big O (n^2) nasted loop
// function bubleSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (
//         // arr[j] > arr[j + 1] // acending
//         arr[j] < arr[j + 1] // decending
//       ) {
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubleSort(unSortedArray));

// Insertion Sort

// function insertionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log("i:", i);
//     let insertVal = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > insertVal) {
//       console.log(j, arr[j], arr[j + 1], insertVal);
//       arr[j + 1] = arr[j];
//       console.log("arr", arr[j], arr[j + 1]);

//       j -= 1;
//     }
//     arr[j + 1] = insertVal;
//     // console.log(j, arr, insertVal);
//   }
//   // return arr;
// }
// console.log(insertionSort(unSortedArray));

// Quick Sort
// function quickSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   const pivot = arr[arr.length - 1];
//   const leftArr = [];
//   const rightArr = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       leftArr.push(arr[i]);
//     } else {
//       rightArr.push(arr[i]);
//     }
//   }
//   return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
// }
// console.log(quickSort(unSortedArray));
// Merge Sort
// function mergeSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   const mid = Math.floor(arr.length / 2);
//   const leftArr = arr.slice(0, mid);
//   const rightArr = arr.slice(mid);
//   return merge(mergeSort(leftArr), mergeSort(rightArr));
// }
// function merge(leftArr, rightArr) {
//   const sortedArr = [];
//   while (leftArr.length && rightArr.length) {
//     if (leftArr[0] <= rightArr[0]) {
//       sortedArr.push(leftArr.shift());
//     } else {
//       sortedArr.push(rightArr.shift());
//     }
//   }
//   return [...sortedArr, ...leftArr, ...rightArr];
// }
// console.log(mergeSort(unSortedArray));

// Searching
// Linear Search
// const n = [1, 4, 2, 7, 9, 45, 6, 4];
// function linearSearch(arr, target) {
//   if (arr.length < 1) {
//     return -1;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(linearSearch(n, 45));
// Binary Search
// const nb = [1, 2, 3, 4, 5, 6, 7];
// function binarySearch(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length;
//   while (rightIndex > leftIndex) {
//     const mid = Math.floor((leftIndex + rightIndex) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       leftIndex = mid + 1;
//     } else {
//       rightIndex = mid - 1;
//     }
//   }
//   return -1;
// }
// console.log(binarySearch(nb, 4));

// function recbin(arr, target) {
//   return search(arr, 0, arr.length, target);
// }

// function search(arr, leftIndex, rightIndex, target) {
//   const mid = Math.floor((leftIndex + rightIndex) / 2);
//   if (arr[mid] === target) {
//     return mid;
//   } else if (arr[mid] < target) {
//     search(arr, mid + 1, rightIndex, target);
//   } else {
//     search(arr, leftIndex, mid - 1, target);
//   }
// }
// console.log(recbin(nb, 4));

// Math

// palimdrom
// var isPalindrome = function (x) {
//   var rem,
//     temp = x,
//     final = 0;
//   while (x > 0) {
//     rem = x % 10;
//     x = parseInt(x / 10);
//     final = final * 10 + rem;
//   }
//   if (final == temp) {
//     return true;
//   }
//   return false;
// };
// console.log(isPalindrome(1));

// prime
// powerOf2
// Factorial
// Fibonacci
// Climbing
// towerOfHanoi

/*

Till Covered Algo with time compexity

#Sorting
Merge Sort Big O(nlogn)
Quick Sort Big O(nlogn)
Insertion Sort Big O(n^2)
Bubble sort Big O(n^2)
select sort Big O(n^2)

#Searching
Linear Search O(n)
Binary Search O(logn)


#Math
Palindrom O(n)
Prime O(n)
Tower of Hanoi O(2^n)
PowerOf2 O(logn)
Climbing staircase O(n)
Fibonacci O(n)
Factorial O(n)
*/
