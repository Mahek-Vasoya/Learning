// Stack
// Stack Data structure is a sequential collection of element that follows the principal of LAST IN FIRST OUT (LIFO)
//
// pop
// push
// print
// size

function Stack() {
  this.storage = {};
  this.lenth = 0;
  this.push = (value) => {
    this.storage[this.lenth] = value;
    this.lenth += 1;
  };
  this.pop = () => {
    if (this.lenth === 0) {
      console.log("Stack is Empty");
    }
    this.lenth -= 1;
    const deletedValue = this.storage[this.lenth];
    delete this.storage[this.lenth];
    return deletedValue;
  };
  this.print = () => {
    const values = Object.values(this.storage);
    console.log(values);
  };
  this.size = () => console.log("size:", this.lenth);
  this.isEmpty = () => this.lenth === 0;
  this.peek = () => this.storage[this.lenth - 1];
}

// 1,3,4, 5,6
const stackObj = new Stack();
// console.log(stackObj);
console.log(stackObj.isEmpty());
stackObj.push(1); // 1
stackObj.print();
stackObj.push(2); // 1, 2
stackObj.print();
stackObj.push(3); // 1,2,3
stackObj.print(); // [1,2,3]
stackObj.size(); // 3
// console.log("pop:", stackObj.pop()); // 3
// stackObj.print(); // [1,2]
// console.log("pop:", stackObj.pop());
stackObj.print(); // [1,2]
console.log(stackObj.peek());
console.log(stackObj.isEmpty());
