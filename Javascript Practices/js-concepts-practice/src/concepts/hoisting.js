//  #hoisting
//  variable / function / class
/*
-> In javascript, a variable can be declared after it has been used.
in other word, avaiable can be use before if has need declated.
In javascript Hoisting refers the process whereby the interpreter 
appears to move the declaration of functions, variables or classes 
to the top of their scope, prior to execution of the code.
*/
// EX:-

//  variable hoisting
// a = 10;
// var a;
// console.log(a);

// function hoisting
// func();
// function func() {
//   console.log("function hoisting");
// }

/* 

Note 
--> let and const hoisting
Variables declared with let and const are also hoisted but,
unlike var, are not initialized with a default value.
An exception will be thrown if a variable declared with
let or const is read before it is initialized.

--> Classes defined using a class declaration are hoisted,
which means that JavaScript has a reference to the class.
However the class is not initialized by default,
so any code that uses it before the line in
which it is initialized is executed will throw a ReferenceError.

*/
