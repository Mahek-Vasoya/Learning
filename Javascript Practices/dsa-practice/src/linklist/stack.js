import LinkList from "./LinkList";

class Stack {
  constructor() {
    this.list = new LinkList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
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

const obj = new Stack();
obj.push(1);
obj.push(2);
obj.push(3);
obj.print();
obj.pop();
obj.print();
console.log(obj.size());
console.log(obj.isEmpty());
console.log(obj.peek());
obj.print();
