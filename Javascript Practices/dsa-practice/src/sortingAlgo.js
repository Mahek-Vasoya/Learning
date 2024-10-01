// Merge Sort
// Big O -> O(nlogn)
function MergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(MergeSort(leftArr), MergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

const ms = [6, 4, -2, 5, 10];
console.log(MergeSort(ms));
// Quick Sort
// Worst Case Big O -> O(n^2)
//  Avarage case O(nlogn)
// Decending
// function quickSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }

//   let pivot = arr[arr.length - 1];
//   let leftArr = [];
//   let rightArr = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (pivot < arr[i]) {
//       leftArr.push(arr[i]);
//     } else {
//       rightArr.push(arr[i]);
//     }
//   }
//   return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
// }
// var qs = [6, 4, -2, 5, 10];
// console.log(quickSort(qs));

//  Insertion Sort
// Big O -> O(n^2)
// function InsertionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let insertVal = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > insertVal) {
//       arr[j + 1] = arr[j];
//       j -= 1;
//     }
//     arr[j + 1] = insertVal;
//   }
//   return arr;
// }
// var is = [6, 4, -2, 5, 10];
// console.log(InsertionSort(is));

// Bubble Sort
// Big O -> O(n^2)
// function BubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       const temp = arr[j];
//       if (arr[j] > arr[j + 1]) {
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// var bs = [6, 4, -2, 5, 10];
// console.log(BubbleSort(bs));
