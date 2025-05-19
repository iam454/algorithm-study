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
    let length = this.heap.length;

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallestIndex = index;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex][0] < this.heap[smallestIndex][0]
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex][0] < this.heap[smallestIndex][0]
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
}

/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function (moveTime) {
  const n = moveTime.length;
  const m = moveTime[0].length;

  const visited = Array.from({ length: n }, () => new Array(m).fill(0));
  const q = new MinHeap();
  q.insert([0, 0, 0]);
  visited[0][0] = 1;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (!q.isEmpty()) {
    const [time, cx, cy] = q.remove();

    if (cx === n - 1 && cy === m - 1) {
      return time;
    }

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        if (visited[nx][ny] === 1) {
          continue;
        }
        const waitTime = Math.max(time, moveTime[nx][ny]);
        q.insert([waitTime + 1, nx, ny]);
        visited[nx][ny] = 1;
      }
    }
  }
};
