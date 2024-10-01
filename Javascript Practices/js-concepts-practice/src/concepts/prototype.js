/* prototype
When it comes to inheritance, JavaScript only has one 
construct: objects. Each object has a private property 
which holds a link to another object called its prototype.
That prototype object has a prototype of its own, and so 
on until an object is reached with null as its prototype. 
By definition, null has no prototype, and acts as the final 
link in this prototype chain.
*/
// EX:-
//  using prototype function create custom map

// var a = [1, 2, 3, 4, 5, 6, 7, 8];

// Array.prototype.customMap = function (callback) {
//   const resultArray = [];
//   for (let index = 0; index < this.length; index++) {
//     resultArray.push(callback(this[index], index, this));
//   }
//   return resultArray;
// };

// const data = a.customMap((value, index, arr) => {
//   console.log(value, index, arr);
//   return value;
// });
// console.log(data);

/*
const func = function () {
  this.firstname = "lalit";
  this.lastname = "kumar";
};

let o = new func();
func.prototype.fullname = function () {
  console.log(this.firstname + this.lastname);
};

func.prototype.fullname1 = function () {
  console.log(this.firstname + " " + this.lastname);
};

o.fullname1();
*/

const F = function () {
  this.a = "a";
  this.b = "b";
};

const o = new F();

F.prototype.c = "c";

F.prototype.d = "d";

console.log(F);
console.log(o);
