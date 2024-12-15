const readline = require("readline");

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(node) {
    let currentNodeIndex = this.heap.length;

    while (currentNodeIndex > 1) {
      const parentNodeIndex = Math.floor(currentNodeIndex / 2);
      const parentNode = this.heap[parentNodeIndex];

      if (parentNode <= node) {
        break;
      }

      this.heap[currentNodeIndex] = parentNode;
      currentNodeIndex = parentNodeIndex;
    }

    this.heap[currentNodeIndex] = node;
  }

  remove() {
    if (this.heap.length <= 1) {
      return null;
    }

    const minNode = this.heap[1];
    const lastNode = this.heap.pop();

    if (this.heap.length <= 1) {
      return minNode;
    }

    let currentNodeIndex = 1;
    this.heap[currentNodeIndex] = lastNode;

    while (true) {
      const leftChildIndex = currentNodeIndex * 2;
      const rightChildIndex = currentNodeIndex * 2 + 1;

      let minIndex = currentNodeIndex;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[minIndex]
      ) {
        minIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[minIndex]
      ) {
        minIndex = rightChildIndex;
      }

      if (minIndex === currentNodeIndex) {
        break;
      }

      const temp = this.heap[currentNodeIndex];
      this.heap[currentNodeIndex] = this.heap[minIndex];
      this.heap[minIndex] = temp;

      currentNodeIndex = minIndex;
    }

    return minNode;
  }
}

const pq = new MinHeap();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N = -1;
let count = 0;

rl.on("line", (line) => {
  if (N === -1) {
    N = Number(line);
    count = N;
  } else {
    line
      .split(" ")
      .map(Number)
      .forEach((num) => {
        pq.insert(num);
        if (pq.heap.length > count + 1) {
          pq.remove();
        }
      });

    count--;

    if (count === 0) {
      rl.close();
    }
  }
}).on("close", () => {
  console.log(pq.remove());
  process.exit();
});
