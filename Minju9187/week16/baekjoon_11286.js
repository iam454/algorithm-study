let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("1.txt").toString().split("\n");

const N = Number(input.shift());

class MinHeap {
  constructor() {
    this.heap = [];
  }

  heapPush(element) {
    this.heap.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (
        element[0] > parent[0] ||
        (element[0] === parent[0] && element[1] > parent[1])
      ) {
        break;
      }

      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  heapPop() {
    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }

    return min[1];
  }

  sinkDown() {
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
        if (
          leftChild[0] < element[0] ||
          (leftChild[0] === element[0] && leftChild[1] < element[1])
        ) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (swap === null) {
          if (
            rightChild[0] < element[0] ||
            (rightChild[0] === element[0] && rightChild[1] < element[1])
          ) {
            swap = rightChildIndex;
          }
        } else {
          if (
            rightChild[0] < leftChild[0] ||
            (rightChild[0] === leftChild[0] && rightChild[1] < leftChild[1])
          ) {
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
    heap.heapPush([Math.abs(num), num]);
  } else {
    if (heap.size() > 0) {
      answer.push(heap.heapPop());
    } else {
      answer.push(0);
    }
  }
}

console.log(answer.join("\n"));
