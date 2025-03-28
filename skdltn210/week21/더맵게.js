class Heap {
  constructor() {
    this.heap = [];
  }
  push(value) {
    const heap = this.heap;
    heap.push(value);
    let idx = heap.length - 1;
    let parent = Math.floor((idx - 1) / 2);
    while (idx > 0 && heap[idx] < heap[parent]) {
      [heap[parent], heap[idx]] = [heap[idx], heap[parent]];
      idx = parent;
      parent = Math.floor((idx - 1) / 2);
    }
  }
  pop() {
    const heap = this.heap;
    if (heap.length <= 1) return heap.pop();

    const pop = heap[0];
    heap[0] = heap.pop();
    let current = 0;
    while (true) {
      const left = current * 2 + 1;
      const right = current * 2 + 2;
      if (left >= heap.length) break;
      let smallest = left;
      if (right < heap.length && heap[left] > heap[right]) smallest = right;

      if (heap[current] <= heap[smallest]) break;

      [heap[current], heap[smallest]] = [heap[smallest], heap[current]];
      current = smallest;
    }
    return pop;
  }
}

function solution(scoville, K) {
  let cnt = 0;
  let priorityQueue = new Heap();
  for (let s of scoville) {
    priorityQueue.push(s);
  }
  while (priorityQueue.heap[0] < K) {
    if (priorityQueue.heap.length <= 1) return -1;
    let a = priorityQueue.pop();
    let b = priorityQueue.pop();
    priorityQueue.push(a + b * 2);
    cnt++;
  }
  return cnt;
}
