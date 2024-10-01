// Linklist
// A linklist list is  linear data structure that includes a series of connected nodes each node consist of a data value and a pointer
// that points to the next node
function Node(value, next = undefined) {
  this.next = next;
  this.value = value;
}

function Linklist() {
  let head = undefined;
  let length = 0;
  function addNodeAtFirstPos(value) {
    const newNode = new Node(value);
    if (head === undefined) {
      head = newNode;
    } else {
      newNode.next = head;
      head = newNode;
    }
    length += 1;
  }
  function addNodeAtEndPos(value) {
    const newNode = new Node(value);
    if (head === undefined) {
      head = newNode;
    } else {
      let list = head;
      while (list.next !== undefined) {
        list = list.next;
      }
      list.next = newNode;
    }
    length += 1;
  }
  function addNodeAtPos(value, pos) {
    if (pos === 1) {
      addNodeAtFirstPos(value);
      return;
    }
    if (pos === length) {
      addNodeAtEndPos(value);
      return;
    }
    const newNode = new Node(value);
    if (pos > length) {
      console.log("giver size is more then current list");
      return;
    }
    let node = head;
    let t = 1;
    while (t !== pos - 1) {
      t++;
      node = node.next;
    }
    const nextNode = node.next;
    node.next = newNode;
    newNode.next = nextNode;
    length++;
  }
  function deleteNodeFromStart() {
    if (length === 0) {
      console.log("list is empty");
      return;
    }
    head = head.next;
    length--;
  }
  function deleteNodeFromEnd() {
    if (length === 0) {
      console.log("list is empty");
      return;
    }
    let prev = head;
    let next = head.next;
    while (next.next !== undefined) {
      next = next.next;
      prev = prev.next;
    }
    prev.next = undefined;
    length--;
  }
  function deleteNodeFromPos(pos) {
    if (length === 0) {
      console.log("list is empty");
      return;
    }
    if (pos > length) {
      console.log("entered pos is greter then list size");
      return;
    }
    if (pos === 1) {
      deleteNodeFromStart();
      return;
    }
    if (pos === length) {
      deleteNodeFromEnd();
      return;
    }
    let prev = head;
    let next = head.next;
    let t = 1;
    while (t !== pos - 1) {
      t++;
      next = next.next;
      prev = prev.next;
    }
    prev.next = next.next;
    length--;
  }

  function printList() {
    let list = head;
    let value = [];
    if (list === undefined) {
      console.log("list empty");
      return;
    }

    while (list.next !== undefined) {
      value.push(list.value);
      list = list.next;
    }
    value.push(list.value);
    console.log("current list:", value);
  }

  function size() {
    return length;
  }
  return {
    addNodeAtFirstPos,
    printList,
    addNodeAtEndPos,
    size,
    addNodeAtPos,
    deleteNodeFromStart,
    deleteNodeFromEnd,
    deleteNodeFromPos
  };
}

const listobj = new Linklist();

listobj.addNodeAtFirstPos(10);
listobj.addNodeAtFirstPos(11);
listobj.addNodeAtEndPos(13);
listobj.printList();
console.log("size", listobj.size());
console.log("-----------");
listobj.addNodeAtPos(12, 2);
listobj.printList();
console.log("size", listobj.size());
listobj.addNodeAtPos(12, 4);
listobj.printList();
console.log("size", listobj.size());
listobj.printList();
listobj.deleteNodeFromStart();
console.log("-----------");
listobj.printList();
listobj.deleteNodeFromEnd();
listobj.printList();
listobj.deleteNodeFromPos(2);
listobj.printList();
listobj.deleteNodeFromPos(1);
listobj.printList();
