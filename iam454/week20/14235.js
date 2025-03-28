const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] >= this.heap[index]) {
        break;
      }

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  remove() {
    if (this.heap.length === 0) {
      return -1;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const result = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return result;
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let largest = index;

      if (leftIndex < length && this.heap[leftIndex] > this.heap[largest]) {
        largest = leftIndex;
      }

      if (rightIndex < length && this.heap[rightIndex] > this.heap[largest]) {
        largest = rightIndex;
      }

      if (largest === index) {
        break;
      }

      [this.heap[largest], this.heap[index]] = [
        this.heap[index],
        this.heap[largest],
      ];

      index = largest;
    }
  }
}

const N = Number(input.shift());
const places = input.map((line) => line.trim().split(" ").map(Number));
const store = new MaxHeap();
const result = [];

while (places.length) {
  const gifts = places.shift();
  if (gifts[0] === 0) {
    result.push(store.remove());
  } else {
    for (let i = 1; i < gifts.length; i++) {
      store.insert(gifts[i]);
    }
  }
}

console.log(result.join("\n"));
