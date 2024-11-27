class Stack {
    // Store data in an array
    constructor(array = []) {
        this.container = array; // Initialize with provided array or an empty array
    }

    // Add an element to the stack
    addToStack(element) {
        this.container.push(element); // Push to the container array
    }

    // Remove an element from the top of the stack
    removeFromStack() {
        if (this.container.length === 0) {
            throw new Error("Stack is empty!"); // Optional: Handle empty stack case
        }
        return this.container.pop(); // Remove and return the last element
    }
}

module.exports = Stack;