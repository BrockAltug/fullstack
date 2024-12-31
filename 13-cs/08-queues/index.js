// create the Queue class with two methods to remove and add an element
class Queue {
  // store data in an array
  constructor(data = []) {
    this.container = data;
  }

  addToQueue(item) {
    this.container.push(item);
  }

  removeFromQueue() {
    return this.container.shift();
  }
}

module.exports = Queue;
