const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, X] = input.shift().split(" ").map(Number);
const info = input.map((line) => line.split(" ").map(Number));

const graph = Array.from({ length: N + 1 }, () => []);
const reverseGraph = Array.from({ length: N + 1 }, () => []);

for (const [from, to, weight] of info) {
  graph[from].push([to, weight]);
  reverseGraph[to].push([from, weight]);
}

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
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
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

      [this.heap[index], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[index],
      ];
      index = smallestIndex;
    }
  }
  isEmpty() {
    return this.heap.length === 0;
  }
}

function dijkstra(start, graph) {
  const pq = new MinHeap();
  pq.insert([0, start]);
  const dist = new Array(N + 1).fill(Infinity);
  dist[start] = 0;

  while (!pq.isEmpty()) {
    const [cost, node] = pq.remove();

    if (cost > dist[node]) {
      continue;
    }

    for (const [nextNode, weight] of graph[node]) {
      const newCost = cost + weight;
      if (dist[nextNode] > newCost) {
        dist[nextNode] = newCost;
        pq.insert([newCost, nextNode]);
      }
    }
  }

  return dist;
}

const distFromX = dijkstra(X, graph);
const distToX = dijkstra(X, reverseGraph);

let maxTime = 0;
for (let i = 1; i <= N; i++) {
  const time = distFromX[i] + distToX[i];
  maxTime = Math.max(maxTime, time);
}

console.log(maxTime);
