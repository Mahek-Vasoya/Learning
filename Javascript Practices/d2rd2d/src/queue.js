const Queue = () => {
  const storage = [];
  // Functions to be implemented
  // enqueue(item)
  // dequeue()
  // front()
  // isEmpty()
  // printQueue()

  const enqueue = (value) => {
    storage.push(value);
  };
  const dequeue = () => {
    storage.shift();
  };
  const front = () => {
    if (isEmpty()) {
      return undefined;
    }
    return storage[0];
  };
  const isEmpty = () => {
    return storage.length === 0;
  };
  const printQueue = () => {
    console.log(storage);
  };

  return {
    size: () => storage.length,
    isEmpty,
    front,
    dequeue,
    enqueue,
    printQueue
  };
};

export default Queue;
