// bind, call, apply

// const userInfo = {
//   firstname: "lalit",
//   lastname: "kumar"
// };

/* call and apply
The call() method calls a function with a given
this value and arguments provided individually.
 
Apply serve the exact same purpose.
The only difference between how they work is
that call() expects all parameters to be
passed in individually, whereas apply() expects
an array of all of our parameters.
*/

// call
// function printInfo(age, pincode) {
//   console.log(`${this.firstname} - ${this.lastname} - ${age} - ${pincode}`);
// }
// printInfo.call(userInfo, 23, 234567);

// apply

// function printInfo(age, pincode) {
//   console.log(`${this.firstname} - ${this.lastname} - ${age} - ${pincode}`);
// }
// printInfo.apply(userInfo, [23, 234567]);

// bind
/*
The bind() method creates a new function that,
when called, has its this keyword set to the provided value.
*/

// function printInfo(age, pincode) {
//   console.log(`${this.firstname} - ${this.lastname} - ${age} - ${pincode}`);
// }
// const data = printInfo.bind(userInfo);
// data(23, 234567);
