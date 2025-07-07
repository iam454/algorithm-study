class MinHeap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.heap.length - 1;
    let el = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentEl = this.heap[parentIndex];

      if (el[0] >= parentEl[0]) {
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

    while (true) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      let smallestIndex = index;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex][0] < this.heap[smallestIndex][0]
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex][0] < this.heap[smallestIndex][0]
      ) {
        smallestIndex = rightChildIndex;
      }
      if (smallestIndex === index) {
        break;
      }

      let tmp = this.heap[smallestIndex];
      this.heap[smallestIndex] = this.heap[index];
      this.heap[index] = tmp;

      index = smallestIndex;
    }
  }
  isEmpty() {
    return this.heap.length === 0;
  }
}

function solution(n, costs) {
  const graph = Array.from({ length: n }, () => []);

  for (const [s, e, w] of costs) {
    graph[s].push([e, w]);
    graph[e].push([s, w]);
  }

  const pq = new MinHeap();
  pq.insert([0, 0]);
  const visited = new Array(n).fill(false);

  let answer = 0;

  while (!pq.isEmpty()) {
    const [curWeight, curNode] = pq.remove();

    if (visited[curNode]) {
      continue;
    }

    visited[curNode] = true;
    answer += curWeight;

    for (const [nextNode, nextWeight] of graph[curNode]) {
      if (visited[nextNode] === false) {
        pq.insert([nextWeight, nextNode]);
      }
    }
  }

  return answer;
}
