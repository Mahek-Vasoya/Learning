// Palimdrom
// Big O -> O(n)
// var isPalindrome = function(x) {
//   var rem, temp = x, final = 0;
//   while(x>0){
//       rem = x%10;
//       x = parseInt(x/10);
//       final = final*10+rem;
//   }
//   if(final==temp){
//       return true
//   }
//   return false
// };

// Power of two
// Big O => O(1) contant
// function powerofBitWise(n) {
// if (n < 1) {
//     return false;
//   }
// return (n & (n -1)) === 0
// }
// console.log(powerofBitWise(1));
// console.log(powerofBitWise(2)); // 2 > 1, 2 % 2 = 0. 0 !== 0  2 / 2 = 1 -> true
// console.log(powerofBitWise(3)); // 3 > 1, 3 % 2 = 1, 0 !===1, return false
// console.log(powerofBitWise(4));

// Big O => O(logn)
// function powerOf2(n) {
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2; // becuase increment is not linear it will be half of previouse i.e logerithum so O(long n)
//   }
//   return true;
// }
// console.log(powerOf2(1));
// console.log(powerOf2(2)); // 2 > 1, 2 % 2 = 0. 0 !== 0  2 / 2 = 1 -> true
// console.log(powerOf2(3)); // 3 > 1, 3 % 2 = 1, 0 !===1, return false
// console.log(powerOf2(4));

// isPrime
//  Big - O => O(n) linear
// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrime(1));
// console.log(isPrime(3));
// console.log(isPrime(4));
// console.log(isPrime(5));

// Factorial
// a product of + integret less of given number call factorial
// Big O => O(n)
// function fectorial(n) {
//   let sum = 1;
//   let i = 2;
//   while (i <= n) {
//     sum *= i;
//     i++;
//   }
//   return sum;
// }
// console.log(fectorial(2)); //1
// console.log(fectorial(4)); // 1 * 2 * 3 * 4
// console.log(fectorial(6)); // 1 * 2 * 3 * 4 * 5 * 6

// Recurssion Solution of factorial
// Big O => O(n)
// function recFact(x) {
//   if (x <= 1) {
//     return 1;
//   }
//   return x * recFact(x - 1);
// }
// console.log(recFact(5));
// console.log(recFact(4));

// fibonacci
// Finonacci sequence is a sequence in which each number is the sum of the two preceding ones.
// function fibonacci(n) {
// if (n === 0) {
//   return [0];
// }
//   const feb = [0, 1];
//   for (let i = 2; i < n; i++) {
//     feb[i] = feb[i - 1] + feb[i - 2];
//   }
//   return feb;
// }
// console.log(fibonacci(1)); //[0,1] // O(n - 2) -> O(n)
// console.log(fibonacci(2)); //[0,1] // O(n - 2) -> O(n)
// console.log(fibonacci(7)); //[0,1,1,2,3,5,8] // O(n - 2) -> O(n)

// Fibonacci using recurssion
//  Big O => O(2^n) /// horrible time complexity some time recurssion does not make sense in terms of time complexity
// function fibRec(x) {
//   if (x < 2) {
//     return x;
//   }
//   return fibRec(x - 1) + fibRec(x - 2);
// }
// console.log(fibRec(0));

// Climbing staircase
//  either we can clim 1 or 2 STEP
//  So The initial base case should/will be [1, 2]
//  big O -> O(n)
// function ClimbingStairCase(n) {
//   const noOfWays = [1, 2];
//   for (let i = 2; i < n; i++) {
//     noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
//   }
//   return [noOfWays, noOfWays[n - 1]];
// }
// console.log(ClimbingStairCase(5));

// Tower of hanoi
// pesudo code
// shift n-1 disk from A to B using c(when required)
// shif last disk from A to C using B
// shift n-1 disk from B to C using A(when required)

//  2^n -1
// Big O => O(2^n)
//
// function towerOfhanoi(n, fromRod, toRod, uisngRod) {
//   if (n === 1) {
//     console.log(`Mode disk 1 from ${fromRod} to ${toRod}`);
//     return;
//   }
//   towerOfhanoi(n - 1, fromRod, uisngRod, toRod);
//   console.log(`Mode disk ${n} from ${fromRod} to ${toRod}`);
//   towerOfhanoi(n - 1, uisngRod, toRod, fromRod);
// }
// console.log("-----------------");
// towerOfhanoi(4, "A", "C", "B");

// 4 number of dis
