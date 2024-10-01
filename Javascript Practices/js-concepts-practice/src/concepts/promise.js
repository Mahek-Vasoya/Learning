var userOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("one");
  }, 500);
});

var userTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("two");
  }, 500);
});

var userThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('three');
    reject("error in three");
  }, 500);
});
console.log(userThree);
var allPromise = [userOne, userTwo, userThree];
Promise.all(allPromise)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

// var arr = [6000, 500, 400, 3000];
// function print() {
//   var promise = [];
//   var i = 0;
//   while (i < 4) {
//     promise.push(
//       new Promise((resolve) => {
//         setTimeout(resolve(arr[i]), arr[i]);
//       })
//     );
//     i++;
//   }
//   return promise;
// }
// const allPromise = print();
// Promise.all(allPromise).then((message) => console.log(message));

// console.log("promse");
// reject, resolve, pending

// const video1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("video1");
//   }, 5000);
// });

// const video2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("video2");
//   }, 4000);
// });

// const video3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("video3");
//   }, 3000);
// });

// Promise.race([video1, video2, video3])
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

/*
function func() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (!error) {
        console.log("Promise Resolved");
        resolve();
      } else {
        console.log("Promise Rejected");
        reject("Sorry");
      }
    }, 4000);
  });
}

func()
  .then((data) => console.log("Resolve in then"))
  .catch((e) => console.log(e));
*/
