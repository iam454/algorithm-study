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

      if (this.compare(el, parentEl) >= 0) {
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
        this.compare(this.heap[leftChildIndex], this.heap[smallestIndex]) < 0
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.compare(this.heap[rightChildIndex], this.heap[smallestIndex]) < 0
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
  compare(a, b) {
    const [idA, reqA, workA] = a;
    const [idB, reqB, workB] = b;

    if (workA !== workB) {
      return workA - workB;
    }
    if (reqA !== reqB) {
      return reqA - reqB;
    }
    return idA - idB;
  }
}

function solution(jobs) {
  let answer = 0;
  const pq = new MinHeap();
  const n = jobs.length;
  jobs = jobs.map((item, index) => [index, item[0], item[1]]);
  jobs.sort((a, b) => a[1] - b[1]);

  let index = 0;
  let time = 0;

  while (index < n || !pq.isEmpty()) {
    while (index < n && jobs[index][1] <= time) {
      pq.insert(jobs[index]);
      index += 1;
    }
    if (!pq.isEmpty()) {
      const [id, req, work] = pq.remove();
      time += work;
      answer += time - req;
    } else {
      time = jobs[index][1];
    }
  }

  return Math.floor(answer / n);
}
