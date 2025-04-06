let fs = require("fs");
const input = fs
  .readFileSync(fs.existsSync("/dev/stdin") ? "/dev/stdin" : "1.txt")
  .toString()
  .trim()
  .split("\n");

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  push(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  pop() {
    if (this.size() === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return min;
  }

  top() {
    return this.size() === 0 ? null : this.heap[0];
  }

  _heapifyUp() {
    let index = this.size() - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  _heapifyDown() {
    let index = 0;
    const length = this.size();
    while (true) {
      let leftChild = 2 * index + 1;
      let rightChild = 2 * index + 2;
      let smallest = index;

      if (leftChild < length && this.heap[leftChild] < this.heap[smallest]) {
        smallest = leftChild;
      }
      if (rightChild < length && this.heap[rightChild] < this.heap[smallest]) {
        smallest = rightChild;
      }
      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}

//열리는 기간, 선호도의 합, 맥주 종류 수
const [N, M, K] = input.shift().split(" ").map(Number);
//선호도, 도수 레벨 - 도수 레벨을 기준으로 오름차순
const beer = input
  .map((v) => v.split(" ").map(Number))
  .sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let sum = 0;
let heap = new MinHeap();

for (let i = 0; i < K; i++) {
  heap.push(beer[i][0]);
  sum += beer[i][0];
  console.log(heap, beer[i]);
  if (heap.size() === N) {
    if (sum >= M) {
      console.log(beer[i][1]);
      return;
    } else {
      sum -= heap.pop();
    }
  }
}

console.log(-1);
