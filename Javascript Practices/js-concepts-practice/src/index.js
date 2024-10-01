// import "./concepts/hoisting";
// import "./concepts/closures";
// import "./concepts/prototype";
// import "./concepts/bind"; // bind call applu
// import "./concepts/curring";
// import "./concepts/problems";
// import "./conceptse/promise";
// import "./concepts/throttling";
// import "./concepts/designPattern";
import "./concepts/polyfill";

//  sliding window problem
/*
function maxSumArr(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSumArr([2, 6, 9, 2, 1, 6, 6,6,6, 8, 5, 6, 3], 3));
*/

// const obj = {
//   test: 'lalit',
//   fullname: function (){
//     const
//     return
//   }
// }

// function parent() {
//   var hoisted = "I am a variable";
//   function hoisted() {
//     return "I’m a function";
//   }
//   return hoisted();
// }
// parent();

// var myObject = {
//   price: 20.99,
//   get_price: function () {
//     return this.price;
//   }
// };
// var customObject = Object.create(myObject);
// customObject.price = 19.99;
// console.log(customObject.get_price());

//  deep and shalow copy
//  Deep copy means we copy a vaiable value not the reference

// var a = [1, 2, 3];
// var b = [...a];
// a[0] = 4;
// console.log(a, b);

//  shallow copy is the vaiable with point the same reference with original vaiable
// work with only no premitive data type

// var ab = { name: "xys" };
// var cd = ab;
// cd.name = "abc";
// console.log(ab, cd);
