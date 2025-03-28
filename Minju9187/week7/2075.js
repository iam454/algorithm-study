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
    let cur = this.heap.length - 1;

    while (cur > 1) {
      let parent = Math.floor(cur / 2);
      if (item < this.heap[parent]) {
        this.heap[cur] = this.heap[parent];
        cur = parent;
      } else break;
    }
    this.heap[cur] = item;
  }

  pop() {
    const root = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap.pop();
      let cur = 1;
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

        if (this.heap[smallest] < this.heap[cur]) {
          [this.heap[smallest], this.heap[cur]] = [
            this.heap[cur],
            this.heap[smallest],
          ];
          cur = smallest;
        } else break;

        leftChild = cur * 2;
        rightChild = cur * 2 + 1;
      }
    } else if (this.heap.length === 2) {
      this.heap.pop();
    }
    return root;
  }

  size() {
    return this.heap.length - 1;
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
