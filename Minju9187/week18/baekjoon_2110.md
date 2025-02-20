# 문제

2110 | 공유기 설치
https://www.acmicpc.net/problem/2110

## 관련문제

백준 2343번 기타 레슨 관련 문제

## 문제 풀이

이진탐색

최솟값 1, 최댓값 arr[arr.length-1] - arr[0] 이므로 left와 right를 각각 둠
이진탐색으로 구현하고 arr - 이전 요소 >= mid가 되면 cnt를 늘리고 prev를 arr로 바꾸는 식으로 해서 cnt를 계산
cnt가 C보다 크다는 것은 mid가 작다는 얘기이고 cnt가 C보다 작으면 mid가 크다는 얘기
그렇게 left와 right를 mid를 기준으로 늘리고 줄여 값을 찾아감

### 궁금한점..

```
//1번 방법
const arr = input.map(Number).sort((a, b) => a - b);

//2번 방법
const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(Number(input[i]));
}
arr.sort((a, b) => a - b);
```

1번 방법으로 하면 정답률이 48%가 나오고 2번 방법으로 하면 통과를 함
아무리 봐도 위와 아래는 같은 방식인데 왜 48퍼에서 실패를 하는지 모르겠음...
이유를 아시는 분은 알려주세요ㅠㅠㅠ

### 해결

해결을 해버림...

```
const arr = input.map(Number).sort((a,b)=>a-b);
//해결 코드
const arr = input.filter(v=>v.trim()!=="").map(Number).sort((a,b)=>a-b);
```

백준에서 입력을 처리할 때 빈 줄이 포함될 가능성이 있음
map(Number)를 사용하면 빈 줄이 NaN이 되어 오류 발생 가능성이 있음
for문을 사용하면 N개의 입력만 읽어서 불필요한 값이 들어가지 않아 문제가 없었던 것
filter를 통해 빈 줄을 걸러내어 정상적으로 작동할 수 있도록 함
