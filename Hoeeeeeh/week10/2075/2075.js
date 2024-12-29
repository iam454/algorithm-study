const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


class PriorityQueue {
    constructor() {
        this.heap = []; // 데이터를 담을 배열
    }

    enqueue(value) {
        // 1. 힙 자료구조에 value 를 넣고
        this.heap.push(value);
        // 2. value 가 알맞은 자리를 찾아갈 수 있도록 한다. -> 아래의 bubbleUp 함수를 사용할 예정
        this.bubbleUp(this.heap.length - 1);
    }

    dequeue() {
        if (this.heap.length === 0) return null;

        // 1. 힙 자료구조의 루트 노드(0번째 Index)에 해당하는 값을 임시로 저장해두고
        // (pop 이 아님! pop(0)은 O(n) 의 시간복잡도를 가지기 떄문에 힙 자료구조를 사용하는 의미가 없어짐
        const min = this.heap[0];
        // 2. 맨 마지막 리프 노드에 해당하는 값을 루트 노드에 저장하고,
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;

            // 3. 해당 루트 노드의 값이 알맞은 자리를 찾아갈 수 있도록 한다. -> bubbleDown
            this.bubbleDown(0);
        }

        return min;
    }

    bubbleUp(index) {
        // index 번 째에 해당하는 노드의 값보다 작은 값이 있다면, index 노드를 위로 올려보내야 한다.
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2); // index 노드의 부모 노드 구하기.
            if (this.heap[parentIndex] <= this.heap[index]) break; // 최소 힙이므로 부모노드는 항상 자식 노드보다 작거나 같다!

            this.swap(index, parentIndex); // index 랑 부모노드랑 스왑
            index = parentIndex; // 부모노드로 올라간 index 부터 반복
        }
    }

    bubbleDown(index) {
        // index 번 째에 해당하는 노드의 값보다 큰 값이 있다면, index 노드를 아래로 내려보내야 한다.
        while (true) {
            const leftChildIndex = 2 * index + 1; // 왼쪽 자식 노드
            const rightChildIndex = 2 * index + 2; // 오른쪽 자식 노드
            let smallestIndex = index; // 부모노드, 왼쪽 자식노드, 오른쪽 자식 노드 중에 가장 작은 값을 저장할 변수

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                // 만약 부모노드보다 왼쪽 자식 노드가 작다면 smallestIndex 를 왼쪽 자식 노드로 변경
                smallestIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                // 만약 위의 if 문에서 왼쪽 자식 노드가 작았다면 smallestIndex 는 왼쪽 자식 노드,
                // 아니라면 부모 노드
                // 똑같이 오른쪽 자식 노드랑 비교
                smallestIndex = rightChildIndex;
            }
            // 만약 가장 작은 노드가 부모 노드라면 최소 힙의 조건을 만족하므로 break
            if (smallestIndex === index) break;

            // 자식 노드 중에 더 작은 노드(smallestIndex) 와 부모노드를 스왑
            this.swap(index, smallestIndex);

            //더 작은 노드의 위치에 index 노드를 두고 반복
            index = smallestIndex;
        }
    }

    swap(i, j) {
        // i, j 값 스왑
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

let arr = [];
let N = -1;
rl.on('line', function (line) {
    if(N === -1) N = parseInt(line);
    else arr.concat(line.split(' ').map((n) => parseInt(n)));
}).on('close', function (){
    const PQ = new PriorityQueue();
    const initState = arr[arr.length - 1].map((_, idx) => [arr.length - 1, idx]);

    initState.forEach(([i, j]) => PQ.enqueue(i ,j))
    const [i, j] = PQ.findNst(N);
    console.log(arr[i][j]);
});
