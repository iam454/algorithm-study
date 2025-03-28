let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("1.txt").toString().split("\n");

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

class MaxHeap {
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

      if (element < parent) {
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
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (swap === null) {
          if (rightChild > element) {
            swap = rightChildIndex;
          }
        } else {
          if (rightChild > leftChild) {
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

let minHeap = new MinHeap();
let maxHeap = new MaxHeap();

let answer = [Number(input[0])];
maxHeap.push(Number(input[0]));

for (let i = 1; i < N; i++) {
  const num = Number(input[i]);
  //값이 maxHeap의 최대값보다 크면 minHeap에 넣고 작으면 maxHeap
  if (num > maxHeap.heap[0]) minHeap.push(num);
  else maxHeap.push(num);

  //minHeap크기가 maxHeap보다 크면 minHeap에 있는걸 빼서 maxHeap에 넣기, minHeap에 1을 더한것보다도 maxHeap이 더 크면 maxHeap에서 하나 빼서 minHeap에 넣기 ( 항상 maxHeap이 minHeap보다 같거나 한개가 더 많아야 함 - maxHeap의 최대값이 중앙값이기 때문 )
  if (minHeap.size() > maxHeap.size()) {
    maxHeap.push(minHeap.pop());
  } else if (minHeap.size() + 1 < maxHeap.size()) {
    minHeap.push(maxHeap.pop());
  }
  answer.push(maxHeap.heap[0]);
}

console.log(answer.join("\n"));
