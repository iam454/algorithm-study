# 문제

1680 | 쓰레기 수거
https://www.acmicpc.net/problem/1680

## 문제 풀이

구현문제

쓰레기가 더이상 넣을 수 없을 때, 쓰레기가 넘칠 때, 쓰레기가 남은 용량과 같을 때 이렇게 세 가지 경우로 나눠서 풀면됨

마지막에 용량이 가득 찼을 때는 더하지 않아도 되는데 더해진 것이기 때문에 다시 값을 빼줌으로서 돌려줌

```
  if (curCapacity === W) {
    totalDistance -= 2 * lastPosition;
  }
```
