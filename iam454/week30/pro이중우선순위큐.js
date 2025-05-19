class MinHeap {
  constructor() {
    this.heap = [];
  }
  insert(item) {
    this.heap.push(item);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.heap.length - 1;
    let el = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentEl = this.heap[parentIndex];

      if (el >= parentEl) {
        break;
      }

      this.heap[index] = parentEl;
      this.heap[parentIndex] = el;
      index = parentIndex;
    }
  }
  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }

  bubbleDown() {
    let index = 0;
    let length = this.heap.length;

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallestIndex = index;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = rightChildIndex;
      }
      if (smallestIndex === index) {
        break;
      }
      let tmp = this.heap[index];
      this.heap[index] = this.heap[smallestIndex];
      this.heap[smallestIndex] = tmp;
      index = smallestIndex;
    }
  }
  isEmpty() {
    return this.heap.length === 0;
  }
  top() {
    return this.heap[0];
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  insert(item) {
    this.heap.push(item);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.heap.length - 1;
    let el = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentEl = this.heap[parentIndex];

      if (el <= parentEl) {
        break;
      }

      this.heap[index] = parentEl;
      this.heap[parentIndex] = el;
      index = parentIndex;
    }
  }
  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }

  bubbleDown() {
    let index = 0;
    let length = this.heap.length;

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let largestIndex = index;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] > this.heap[largestIndex]
      ) {
        largestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] > this.heap[largestIndex]
      ) {
        largestIndex = rightChildIndex;
      }
      if (largestIndex === index) {
        break;
      }
      let tmp = this.heap[index];
      this.heap[index] = this.heap[largestIndex];
      this.heap[largestIndex] = tmp;
      index = largestIndex;
    }
  }
  isEmpty() {
    return this.heap.length === 0;
  }
  top() {
    return this.heap[0];
  }
}

function solution(operations) {
  const minQ = new MinHeap();
  const maxQ = new MaxHeap();
  const map = new Map();

  function clean(heap) {
    while (!heap.isEmpty() && map.get(heap.top()) === 0) {
      heap.remove();
    }
  }

  for (const op of operations) {
    const [com, arg] = op.split(" ");
    const val = Number(arg);

    if (com === "I") {
      minQ.insert(val);
      maxQ.insert(val);
      map.set(val, (map.get(val) || 0) + 1);
    } else {
      if (map.size === 0) {
        continue;
      }
      if (val === 1) {
        clean(maxQ);
        const top = maxQ.remove();
        if (top) {
          map.set(top, map.get(top) - 1);
        }
      } else {
        clean(minQ);
        const top = minQ.remove();
        if (top) {
          map.set(top, map.get(top) - 1);
        }
      }
    }
  }

  clean(maxQ);
  clean(minQ);

  if (maxQ.isEmpty() || minQ.isEmpty()) {
    return [0, 0];
  }

  return [maxQ.top(), minQ.top()];
}
