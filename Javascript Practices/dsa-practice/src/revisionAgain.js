// function LinearSearch(arr, target) {
//   if (arr.length === 0) return -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(LinearSearch([10,23,24,1,2,3], 3))

// function BinarySearch(arr, target) {
//   if (arr.length === 0) return -1;
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;
//   while (leftIndex < rightIndex) {
//     const mid = Math.floor((leftIndex + rightIndex) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     }
//     if (target < arr[mid]) {
//       rightIndex = mid - 1;
//     } else {
//       leftIndex = mid + 1;
//     }
//   }
//   return -1;
// }
// console.log(BinarySearch([10, 20, 30, 40, 50], 40));

// function mergeSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let mid = Math.floor(arr.length / 2);
//   let leftArray = arr.slice(0, mid);
//   let rightArray = arr.slice(mid);
//   return merge(mergeSort(leftArray), mergeSort(rightArray));
// }

// function merge(leftArr, rightArr) {
//   let sortedArr = [];
//   while (leftArr.length && rightArr.length) {
//     if (leftArr[0] <= rightArr[0]) {
//       sortedArr.push(leftArr.shift());
//     } else {
//       sortedArr.push(rightArr.shift());
//     }
//   }
//   return [...sortedArr, ...leftArr, ...rightArr];
// }
// console.log(mergeSort([1, 2, 24, 35, 56, 3, 4, 5]));

// function quickSort(arr) {
//   if (arr.length < 2) return arr;
//   const pivot = arr[arr.length - 1];
//   let i = 0;
//   let leftArr = [];
//   let rightArr = [];
//   while (i < arr.length - 1) {
//     if (arr[i] < pivot) {
//       leftArr.push(arr[i]);
//     } else {
//       rightArr.push(arr[i]);
//     }
//     i++;
//   }
//   return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
// }

// console.log(quickSort([20, 10, 1, 4, 0, 30, 40]));

const arrStr = ["ab", "ba", "12", "21", "34", "44", "cd"];

function findStringGroups(strList) {
  if (strList.length === 0) return [];
  let groups = {};
  for (let i = 0; i < strList.length; i++) {
    groups[i] = stringRotationList(strList[i]);
  }
  strList((str, index) => {
    const group = [str, ...groups[index]];
    group.forEarch((g) => {});
  });
  console.log(groups);
}

function stringRotationList(str) {
  let groups = [];
  for (let i = 1; i < str.length; i++) {
    str = str.substring(1, str.length) + str[0];
    groups.push(str);
  }
  return groups;
}

findStringGroups(arrStr);
