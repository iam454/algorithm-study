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
    let element = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentElement = this.heap[parentIndex];

      if (element[0] >= parentElement[0]) {
        break;
      }
      this.heap[index] = parentElement;
      this.heap[parentIndex] = element;
      index = [parentIndex];
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
    const len = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      let smallestIndex = index;

      if (
        leftChildIndex < len &&
        this.heap[leftChildIndex][0] < this.heap[smallestIndex][0]
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < len &&
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

  const dp = Array.from({ length: n }, () => new Array(m).fill(Infinity));
  const q = new MinHeap();
  q.insert([0, 0, 0, 0]);
  dp[0][0] = 0;

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  while (!q.isEmpty()) {
    const [time, x, y, moves] = q.remove();

    if (x === n - 1 && y === m - 1) {
      return time;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        const waitTime = Math.max(time, moveTime[nx][ny]);
        const moveCost = moves % 2 === 0 ? 1 : 2;
        const newTime = waitTime + moveCost;

        if (newTime < dp[nx][ny]) {
          dp[nx][ny] = newTime;
          q.insert([newTime, nx, ny, moves + 1]);
        }
      }
    }
  }

  return -1;
};
