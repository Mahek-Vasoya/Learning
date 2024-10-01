console.log("Circular Queue");
// Circular Queue
// isEmpty
// size
// enqueue
// dequeue
// print
// peek
function CircularQueue(capecity) {
  this.items = new Array(capecity);
  this.capecity = capecity;
  this.length = 0;
  this.rear = -1;
  this.front = -1;
  this.isFull = () => this.capecity === this.length;
  this.isEmpty = () => this.length === 0;
  this.size = () => this.length;
  this.enqueue = (value) => {
    if (this.isFull()) {
      console.log("queue is full");
      return;
    }
    if (this.front === -1) this.front = 0;
    console.log("ddd rear", this.rear, (this.rear + 1) % this.capecity);
    this.rear = (this.rear + 1) % this.capecity;
    this.items[this.rear] = value;
    this.length += 1;
  };
  this.dequeue = () => {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    console.log("ddd", this.front, (this.front + 1) % this.capecity);
    this.front = (this.front + 1) % this.capecity;
    this.length -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  };

  this.peek = () => {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.front];
  };

  this.print = () => {
    let i;
    let str = "";
    for (i = this.front; i !== this.rear; i = (i + 1) % this.capecity) {
      str += this.items[i] + " ";
    }
    str += this.items[i];
    console.log(str);
  };
}

const cq = new CircularQueue(5);
// console.log(cq.isEmpty());
// console.log(cq.isFull());
// console.log(cq.size());
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.enqueue(50);
// cq.print();
console.log(cq.dequeue());

cq.enqueue(50);
// cq.print();
