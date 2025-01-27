# 문제

21318 | 피아노 체조
https://www.acmicpc.net/problem/21318

## 문제 풀이

dp
이중 for문으로 풀기에는 시간제한이 0.5초이기 때문에 불가..
그래서 dp를 사용해 문제 해결
시간초과가 계속 떴었는데 어쩌다 보니 해결.. readline과 readFileSync 문제인줄 알았는데 아니였던걸로...

## 시간초과가 뜬 이유

console.log는 I/O 연산
I/O는 계산 작업보다 훨씬 느린 작업이므로, 호출 횟수가 많을수록 프로그램의 실행 시간이 증가
console.log를 for문에서 그때 그때 출력시켜서 시간초과가 뜸
result배열에 한번에 모아서 join으로 한번에 console.log를 출력시켜주는 방식으로 해결
