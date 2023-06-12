class queue
  constructor() {
    this.items = [];
  }

enqueue () {
  return this.items.shift();
}

dequeue() {
  return this.items.shift();
]

peek() {
  return this.items[0];
}
  
  getSize() {
    return this.items.length;
  }
  
  isEmpty() {
    return this.getSize() === 0;
  }
