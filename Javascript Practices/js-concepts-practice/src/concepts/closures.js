/* Closures
 A closure is the combination of a function bundled
 together (enclosed) with references to its surrounding
 state (the lexical environment). In other words, a closure
 gives you access to an outer function’s scope from
 an inner function. In JavaScript, closures are created
 every time a function is created, at function creation time.
 */
// EX:-
//  using clouser create memoization

// function add(x, y) {
//   return x + y;
// }

// function memoization(fun) {
//   const masterVar = {};
//   return function (x, y) {
//     if (masterVar[`x-y`]) {
//       console.log("cached");
//       return masterVar[`x-y`];
//     } else {
//       console.log("created cached for", x, y);
//       const result = fun(x, y);
//       masterVar[`x-y`] = result;
//       return result;
//     }
//   };
// }

// const memoAdd = memoization(add);
// console.log(memoAdd(10, 15));
// console.log(memoAdd(10, 15));
// console.log(memoAdd(10, 11));
// console.log(memoAdd(10, 15));
// console.log(memoAdd(10, 15));
// console.log(memoAdd(10, 15));
// console.log(memoAdd(10, 50));
// console.log(memoAdd(10, 51));
// console.log(memoAdd(10, 50));

/*function userInfo() {
  const firstName = "lalit";
  const lastName = "Kumar";
  function fullName() {
    // inner function of parent function -> Closures
    console.log(`${firstName} ${lastName}`); // here we can access outer function variables
  }
  fullName();
}
userInfo();
*/

function add(x, y) {
  return x + y;
}

function memoization(fn) {
  const masterVar = {};
  return function (x, y) {
    if (masterVar[`${x}-${y}`]) {
      console.log("returning memoized value");
      return masterVar[`${x}-${y}`];
    } else {
      console.log("returning none memoized value");
      const result = fn(x, y);
      masterVar[`${x}-${y}`] = result;
      return result;
    }
  };
}

const data1 = memoization(add);
console.log(data1(5, 10));
console.log(data1(5, 10));
console.log(data1(5, 15));
console.log(data1(5, 10));
