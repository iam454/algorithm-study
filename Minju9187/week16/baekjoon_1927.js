let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("1.txt").toString().split("\n");

const N = Number(input.shift());

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(element) {
    this.heap.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (element > parent) {
        break;
      }

      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  pop() {
    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }

    return min;
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[index];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (swap === null) {
          if (rightChild < element) {
            swap = rightChildIndex;
          }
        } else {
          if (rightChild < leftChild) {
            swap = rightChildIndex;
          }
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }

  size() {
    return this.heap.length;
  }
}

let heap = new MinHeap();

let answer = [];

for (let i = 0; i < N; i++) {
  const num = Number(input[i]);
  if (num !== 0) {
    heap.push(num);
  } else {
    if (heap.size() > 0) {
      answer.push(heap.pop());
    } else {
      answer.push(0);
    }
  }
}

console.log(answer.join(" "));
