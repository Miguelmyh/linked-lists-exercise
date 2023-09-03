class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// const firstPage = new Node("google.com");
// const secondPage = new Node("reddit.com");
// const thirdPage = new Node("amazon.com");

// firstPage.next = secondPage;
// secondPage.next = thirdPage;
// console.log(firstPage, firstPage.next);

class Node2 {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const otherPage = new Node2(
  "google.com",
  new Node2("amazon.com", new Node2("reddit.com"))
);

console.log(otherPage);

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(` hey ${currentNode.val}`);
      currentNode = currentNode.next;
    }
  }
  find(val) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.val === val) return true;
      currentNode = currentNode.next;
    }
  }
  append(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    // let currentNode = this.head;
    // while (currentNode.next) {
    //   currentNode = currentNode.next;
    // }
    // currentNode.next = new Node(val);
    // console.log("AT the last node", currentNode.val);
  }
}

// const history = new LinkedList();
// history.head = firstPage;
// history.tail = thirdPage;
// console.log(history.traverse());
// console.log(history.find("amazon.com"));
// console.log(history.append("twitter.com"));
// tail.next = console.log(history.traverse());
const train = new LinkedList();
train.append("engine");
train.append("Freight car 1");
train.append("Freight car 2");
console.log(train);
