class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkList {
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
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = newNode;
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
      let prev = this.head;
      let i = 0;
      while (i < pos) {
        prev = prev.next;
        i++;
      }
      const next = prev.next;
      prev.next = newNode;
      newNode.next = next;
    }
    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removalNode;
    if (index === 0) {
      removalNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      let i = 0;
      while (i < index - 1) {
        prev = prev.next;
        i++;
      }
      removalNode = prev.next;
      prev.next = removalNode.next;
    }
    this.size--;
    return removalNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    let removalNode = null;
    if (this.head.value === value) {
      removalNode = this.head;
      this.head = this.head.next;
      this.size--;
    } else {
      let prev = this.head;
      while (prev && prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        removalNode = prev.next;
        prev.next = removalNode.next;
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
    let prev = this.head;
    while (prev) {
      if (prev.value === value) {
        return i;
      }
      prev = prev.next;
      i++;
    }
    return -1;
  }

  getSize() {
    return this.size;
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

  print() {
    if (this.isEmpty()) {
      console.log("List is Empty");
      return;
    }
    let prev = this.head;
    let str = "";
    while (prev !== null) {
      str += prev.value + " ";
      prev = prev.next;
    }
    console.log(str);
  }
}

// const obj = new LinkList();
// obj.print();
// obj.prepend(10);
// obj.print();
// obj.prepend(20);
// obj.print();
// obj.append(30);
// obj.print();
// obj.insert(40, 1);
// obj.print();
// console.log(obj.search(40));
// obj.reverse();
// obj.print();
// obj.removeValue(20);
// obj.print();
// obj.removeValue(30);
// obj.print();
// obj.removeValue(40);
// obj.print();
// obj.removeValue(10);
// obj.print();
// obj.removeValue(10);
// obj.print();
