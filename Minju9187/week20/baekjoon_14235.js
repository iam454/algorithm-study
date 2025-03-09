let fs = require("fs");
const input = fs
  .readFileSync(fs.existsSync("/dev/stdin") ? "/dev/stdin" : "1.txt")
  .toString()
  .trim()
  .split("\n");

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx] >= this.heap[idx]) break;
      [this.heap[parentIdx], this.heap[idx]] = [
        this.heap[idx],
        this.heap[parentIdx],
      ];
      idx = parentIdx;
    }
  }

  pop() {
    if (this.heap.length === 0) return -1;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    let idx = 0;

    while (true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let largest = idx;

      if (left < this.heap.length && this.heap[left] > this.heap[largest])
        largest = left;
      if (right < this.heap.length && this.heap[right] > this.heap[largest])
        largest = right;

      if (largest === idx) break;

      [this.heap[idx], this.heap[largest]] = [
        this.heap[largest],
        this.heap[idx],
      ];
      idx = largest;
    }

    return max;
  }

  size() {
    return this.heap.length;
  }
}

const n = Number(input.shift());

const maxHeap = new MaxHeap();
const result = [];

for (let i = 0; i < n; i++) {
  if (input[i] != 0) {
    const gifts = input[i].trim().split(" ").map(Number).slice(1);
    for (let gift of gifts) maxHeap.push(gift);
  } else {
    if (maxHeap.size() > 0) {
      result.push(maxHeap.pop());
    } else {
      result.push(-1);
    }
  }
}

console.log(result.join("\n"));
