const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const T = Number(input[0]);

  let ans = [];
  let lineIndex = 1;

  for (let t = 0; t < T; t++) {
    const N = Number(input[lineIndex]);
    lineIndex++;

    const points = [];

    for (let i = 0; i < N; i++) {
      const [x, y] = input[lineIndex].split(" ").map(Number);
      points.push({ x, y, index: i + 1 });
      lineIndex++;
    }

    // 결과 저장 배열
    const caseResult = [];

    // 주어진 점들과 교차하지 않게 만들 점 생성
    for (let i = 0; i < N; i++) {
      const px = points[i].x;
      const py = points[i].y;

      // 임의의 점 생성 (x 좌표에 10^8 더하기)
      const newPointX = px + 1e8;
      const newPointY = py + 1;

      // 주어진 점의 번호와 새 점의 좌표 추가
      caseResult.push(`${points[i].index} ${newPointX} ${newPointY}`);
    }

    ans.push(caseResult.join("\n"));
  }

  return ans.join("\n");
}

console.log(solution(input));
