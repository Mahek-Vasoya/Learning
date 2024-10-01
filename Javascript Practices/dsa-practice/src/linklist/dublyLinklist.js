class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default class DoublyLinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      const currentNode = this.head;
      this.head = newNode;
      this.head.next = currentNode;
      currentNode.prev = this.head;
    }
    this.size++;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      newNode.prev = current;
    }
    this.size++;
  }

  insert(value, pos) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else if (pos === 0) {
      this.prepend(value);
    } else if (pos === this.size) {
      this.append(value);
    } else {
      let i = 0;
      let current = this.head;
      while (i < pos) {
        current = current.next;
        i++;
      }
      const prev = current.prev;
      prev.next = newNode;
      newNode.prev = prev;
      newNode.next = current;
      current.prev = newNode;
    }
    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removalNode;
    if (index === 0) {
      removalNode = this.head.next;
      this.head = this.head.next;
    } else {
      let current = this.head;
      let i = 0;
      while (i < index) {
        current = current.next;
        i++;
      }
      removalNode = current;
      const prev = current.prev;
      prev.next = current.next;
    }
    this.size--;
    return removalNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let current = this.head;
      while (current && current.next && current.next.value !== value) {
        current = current.next;
      }
      if (current.next) {
        const prev = current;
        prev.next = current.next.next;
        this.size--;
        return value;
      }
    }
    return null;
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return i;
      }
      current = current.next;
      i++;
    }
    return -1;
  }

  reverse() {
    let prev = null;
    let next = this.head;
    while (next) {
      let temp = next.next;
      next.next = prev;
      prev = next;
      next = temp;
    }
    this.head = prev;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is Empty");
      return;
    }
    let current = this.head;
    let str = "";
    while (current) {
      str += current.value + " ";
      current = current.next;
    }
    console.log(str);
  }
}

const obj = new DoublyLinkList();
obj.prepend(10);
obj.prepend(20);
obj.append(40);
obj.insert(30, 2);
obj.print();
// obj.removeFrom(3);
// obj.print();
// console.log(obj.search(20));
obj.removeValue(30);
obj.print();
