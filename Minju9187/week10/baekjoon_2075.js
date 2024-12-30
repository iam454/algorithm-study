const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  pop() {
    const root = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap.pop();
      this.heapifyDown();
    } else if (this.heap.length === 2) {
      this.heap.pop();
    }
    return root;
  }

  size() {
    return this.heap.length - 1;
  }

  heapifyUp() {
    let cur = this.heap.length - 1;
    const item = this.heap[cur];

    while (cur > 1) {
      let parent = Math.floor(cur / 2);
      if (item < this.heap[parent]) {
        this.heap[cur] = this.heap[parent];
        cur = parent;
      } else break;
    }
    this.heap[cur] = item;
  }

  heapifyDown() {
    let cur = 1;
    const item = this.heap[cur];
    let leftChild = 2 * cur;
    let rightChild = 2 * cur + 1;

    while (this.heap[leftChild]) {
      let smallest = leftChild;
      if (
        this.heap[rightChild] &&
        this.heap[rightChild] < this.heap[leftChild]
      ) {
        smallest = rightChild;
      }

      if (this.heap[smallest] < item) {
        this.heap[cur] = this.heap[smallest];
        cur = smallest;
      } else break;

      leftChild = 2 * cur;
      rightChild = 2 * cur + 1;
    }
    this.heap[cur] = item;
  }
}

const queue = new MinHeap();
let N = -1;
let n;

rl.on("line", (line) => {
  if (N === -1) {
    N = parseInt(line);
    n = N;
    return;
  }

  line.split(" ").forEach((value) => {
    queue.push(parseInt(value));
    if (queue.size() > n) queue.pop();
  });

  N--;
  if (N === 0) rl.close();
}).on("close", () => {
  console.log(queue.pop());
  process.exit();
});
