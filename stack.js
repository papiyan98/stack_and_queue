class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(data) {
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

  pop() {
    if (this.head === null) {
      return;
    } else {
      let previous, current;
      let removed;

      current = this.head

      while (current.next) {
        previous = current;
        current = current.next;
      }

      removed = current.data;
      previous.next = null;

      this.size--;

      return removed;
    }
  }

  isEmpty() {
    return this.size == 0;
  }
}