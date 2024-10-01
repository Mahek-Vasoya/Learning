// 
// micro task in frontend 
// how to cotainerize multiple reducer 
// what are the deference betwenn axios and fetch how to pass headers from one server to another server
// how redux works
// concerant react 
//  concerant taks in javscript



function mul(x) {
  return function (y) {
    if (y) {
      return mul(x * y);
    } else {
      return x;
    }
  };
}

console.log(mul(5)(6)(7)());

// var string = "Welcome to this Javascript Guide!";

// // Output becomes !ediuG tpircsavaJ siht ot emocleW
// var reverseEntireSentence = reverseBySeparator(string, "");

// // Output becomes emocleW ot siht tpircsavaJ !ediuG
// var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

// function reverseBySeparator(string, separator) {
//   return string.split(separator).reverse().join(separator);
// }
// console.log(reverseEachWord);

// function modifyArray(arr, callback) {
//   // do something to arr here
//   arr.push(100);
//   // then execute the callback function that was passed
//   callback();
// }

// var arr = [1, 2, 3, 4, 5];

// modifyArray(arr, function () {
//   console.log("array has been modified", arr);
// });
