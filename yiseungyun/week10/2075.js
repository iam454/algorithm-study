const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let N;
let heap;

class Heap {
  constructor(length) {
    this.heap = [];
    this.maxLength = length;
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length-1);

    if (this.heap.length > this.maxLength) {
      this.pop();
    }
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index-1)/2);
      if (this.heap[parentIndex] > this.heap[index]) {
        const temp = this.heap[parentIndex];
        this.heap[parentIndex] = this.heap[index];
        this.heap[index] = temp;
      }
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    while (true) {
      let minIndex = index;
      const left = 2*index+1;
      const right = 2*index+2;

      if (left < this.heap.length && this.heap[left] < this.heap[minIndex]) {
        minIndex = left;
      }

      if (right < this.heap.length && this.heap[right] < this.heap[minIndex]) {
        minIndex = right;
      }

      if (minIndex === index) break;
      const temp = this.heap[minIndex];
      this.heap[minIndex] = this.heap[index];
      this.heap[index] = temp;
      index = minIndex;
    }
  }

  pop() {
    if (this.heap.length === 0) return null;

    const result = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return result;
  }
}

readline.on('line', (line) => {
  if (!N) {
    N = Number(line);
    heap = new Heap(N);
  } else {
    line.split(" ").map(Number).forEach((number) => {
      heap.push(number);
    })
  }
}).on('close', () => {
  console.log(heap.pop());
  process.exit();
});