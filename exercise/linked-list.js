/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  loop(idx) {
    let currentValue = this.head;
    let count = 0;
    while (currentValue && count != idx) {
      count += 1;
      currentValue = currentValue.next;
    }
    return currentValue;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newValue = new Node(val);
    if (!this.head) {
      this.head = newValue;
      this.tail = newValue;
    } else {
      this.tail.next = newValue;
      this.tail = newValue;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newValue = new Node(val);
    if (!this.head) {
      this.head = newValue;
    } else {
      newValue.next = this.head;
      this.head = newValue;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentValue = this.head;
    while (currentValue.next.next) {
      currentValue = currentValue.next;
    }
    const deletedItem = currentValue.next;
    currentValue.next = null;
    this.tail = currentValue;
    this.length--;
    return deletedItem;
  }

  /** shift(): return & remove first item. */

  shift() {
    let val = this.head;
    this.head = this.head.next;
    this.length--;
    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    let val = this.loop(idx);
    return `this is the value gotten from the loop ${val.val}`;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    let value = this.loop(idx);
    value.val = val;
    return value;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    if (idx === 0) return this.unshift(val);
    if (idx === this.length - 1) return this.push(val);

    let value = this.loop(idx - 1);
    let newValue = new Node(val);

    newValue.next = value.next;
    value.next = newValue;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let value = this.loop(idx - 1);
    let removeValue = this.loop(idx);

    value.next = removeValue.next;
    this.length--;
    return `value to remove ${removeValue.val}`;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    let currentValue = this.head;
    let sum = 0;
    while (currentValue) {
      sum += currentValue.val;
      currentValue = currentValue.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;

// let history = new LinkedList();
// console.log(history.push(2));
// console.log(history.unshift(5));
// console.log(history.push(10));
// console.log(history.push(20));
// // console.log(history.pop());
// // console.log(history.shift());
// console.log(history.getAt(1));
// console.log("length", history.length);
// // console.log(history.setAt(1, 25));
// console.log(history.insertAt(1, 15));
// console.log("length", history.length);
// console.log(history.removeAt(2));
// console.log("value", history.average());
// console.log(history);
