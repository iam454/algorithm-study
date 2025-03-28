class Heap {
  constructor() {
    this.heap = [];
  }
  push(job) {
    const heap = this.heap;
    heap.push(job);
    let idx = heap.length - 1;
    let parent = Math.floor((idx - 1) / 2);
    while (idx > 0) {
      if (heap[idx][2] < heap[parent][2]) {
        [heap[idx], heap[parent]] = [heap[parent], heap[idx]];
      } else if (
        heap[idx][2] === heap[parent][2] &&
        heap[idx][1] < heap[parent][1]
      ) {
        [heap[idx], heap[parent]] = [heap[parent], heap[idx]];
      } else if (
        heap[idx][2] === heap[parent][2] &&
        heap[idx][1] === heap[parent][1] &&
        heap[idx][0] < heap[parent][0]
      ) {
        [heap[idx], heap[parent]] = [heap[parent], heap[idx]];
      } else {
        break;
      }
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
      if (right < heap.length && heap[left][2] > heap[right][2])
        smallest = right;
      else if (
        right < heap.length &&
        heap[left][2] === heap[right][2] &&
        heap[left][1] > heap[right][1]
      )
        smallest = right;
      else if (
        right < heap.length &&
        heap[left][2] === heap[right][2] &&
        heap[left][1] === heap[right][1] &&
        heap[left][0] > heap[right][0]
      )
        smallest = right;

      if (heap[current][2] < heap[smallest][2]) break;
      if (
        heap[current][2] === heap[smallest][2] &&
        heap[current][1] < heap[smallest][1]
      )
        break;
      if (
        heap[current][2] === heap[smallest][2] &&
        heap[current][1] === heap[smallest][1] &&
        heap[current][0] < heap[smallest][0]
      )
        break;

      [heap[current], heap[smallest]] = [heap[smallest], heap[current]];
      current = smallest;
    }
    return pop;
  }
}

function solution(jobs) {
  jobs.sort((a, b) => a[0] - b[0]);

  const jobsWithIndex = jobs.map((job, index) => [index, job[1], job[0]]);
  const q = new Heap();

  let currentTime = jobs[0][0];
  let totalTurnaroundTime = 0;
  let completed = 0;
  let idx = 0;

  while (completed < jobs.length) {
    while (idx < jobs.length && jobs[idx][0] <= currentTime) {
      q.push([idx, jobs[idx][0], jobs[idx][1]]);
      idx++;
    }

    if (q.heap.length > 0) {
      const [jobIdx, requestTime, duration] = q.pop();
      currentTime += duration;
      totalTurnaroundTime += currentTime - requestTime;
      completed++;
    } else if (idx < jobs.length) {
      currentTime = jobs[idx][0];
    }
  }
  return Math.floor(totalTurnaroundTime / jobs.length);
}
