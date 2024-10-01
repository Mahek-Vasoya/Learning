/*
Currying is an advanced technique of working with 
functions. It’s used not only in JavaScript, but in 
other languages as well. Currying is a transformation 
of functions that translates a function from callable 
as f(a, b, c) into callable as f(a)(b)(c).
*/

// const add = function (a, b) {
//   return a + b;
// };

// const curriedFunction = function (fun) {
//   return function (x) {
//     return function (y) {
//       return fun(x, y);
//     };
//   };
// };

// const curry = curriedFunction(add);

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}
console.log(add(5)(10)(30)(40)());
