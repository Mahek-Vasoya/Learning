// Queue
// Queue Data structure is a sequential collection of element that follows the principal FIRST IN FIRST OUT (FIFO)
// enqueue
// dequeue
// size
// print
// peek
// isempty

function Queue() {
  this.storage = [];
  this.enqueue = (value) => this.storage.push(value);
  this.dequeue = () => this.storage.shift();
  this.size = () => this.storage.length;
  this.isEmpty = () => this.storage.length === 0;
  this.peek = () => this.storage[0];
  this.print = () => console.log(this.storage.toString());
}

const qobj = new Queue();
console.log(qobj.isEmpty());
console.log(qobj.size());
qobj.enqueue(10);
qobj.enqueue(20);
qobj.enqueue(30);
qobj.print();
qobj.dequeue();
qobj.print();
console.log(qobj.peek());
