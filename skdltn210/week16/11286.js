const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

class MinAbsHeap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  append(x) {
    this.heap[this.size] = x;
    this.heapifyUp(this.size++);
  }

  heapifyUp(i) {
    const temp = this.heap[i];
    const absTemp = Math.abs(temp);

    while (i > 0) {
      const parent = (i - 1) >>> 1;
      const parentVal = this.heap[parent];
      const absParent = Math.abs(parentVal);

      if (absTemp > absParent || (absTemp === absParent && temp >= parentVal)) {
        break;
      }

      this.heap[i] = parentVal;
      i = parent;
    }

    this.heap[i] = temp;
  }

  delete() {
    if (this.size === 0) {
      console.log(0);
      return;
    }

    const result = this.heap[0];
    console.log(result);

    if (--this.size > 0) {
      const temp = this.heap[this.size];
      this.heap[0] = temp;
      this.heapifyDown(0);
    }
  }

  heapifyDown(i) {
    const temp = this.heap[i];
    const absTemp = Math.abs(temp);
    const half = this.size >>> 1;

    while (i < half) {
      let child = (i << 1) + 1;
      let childVal = this.heap[child];
      let absChild = Math.abs(childVal);
      let right = child + 1;

      if (right < this.size) {
        const rightVal = this.heap[right];
        const absRight = Math.abs(rightVal);

        if (
          absRight < absChild ||
          (absRight === absChild && rightVal < childVal)
        ) {
          child = right;
          childVal = rightVal;
          absChild = absRight;
        }
      }

      if (absTemp < absChild || (absTemp === absChild && temp <= childVal)) {
        break;
      }

      this.heap[i] = childVal;
      i = child;
    }

    this.heap[i] = temp;
  }
}

let input = [];

readline
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    let n = parseInt(input[0]);
    let heap = new MinAbsHeap();

    for (let i = 1; i <= n; i++) {
      let x = parseInt(input[i]);
      if (x === 0) {
        heap.delete();
      } else {
        heap.append(x);
      }
    }
    process.exit();
  });
