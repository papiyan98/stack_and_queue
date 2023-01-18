class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  enQueue(data) {
    if (this.head === null) {
      this.head = new Node(data);
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = new Node(data);
    }
    this.size++;
  }

  deQueue() {
    if (this.head === null) {
      return;
    } else {
      let current = this.head;

      this.head = this.head.next;

      this.size--;

      return current.data;
    }
  }

  isEmpty() {
    return this.size == 0;
  }
}

