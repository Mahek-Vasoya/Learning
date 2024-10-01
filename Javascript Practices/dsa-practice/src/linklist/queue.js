import LinkList from "./LinkList";

class Queue {
  constructor() {
    this.list = new LinkList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    const value = this.list.removeFrom(0);
    console.log(value);
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  size() {
    return this.list.getSize();
  }
  print() {
    this.list.print();
  }
}

const obj = new Queue();
obj.enqueue(1);
obj.enqueue(2);
obj.enqueue(3);
obj.print();
obj.dequeue();
obj.print();
console.log(obj.peek());
obj.dequeue();
obj.print();
