class Queue {
    // Initialize the container as an empty array or with a provided array
    constructor(array = []) {
        this.container = array; // Store elements in the container array
    }

    // Add an element to the end of the queue
    addToQueue(element) {
        this.container.push(element); // Add to the end of the array
    }

    // Remove an element from the beginning of the queue
    removeFromQueue() {
        if (this.container.length === 0) {
            throw new Error("Queue is empty!"); // Optional: Handle empty queue case
        }
        return this.container.shift(); // Remove and return the first element
    }
}

module.exports = Queue;