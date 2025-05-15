function solution(arrows) {
  let answer = 0;
  const dx = [0, 1, 1, 1, 0, -1, -1, -1];
  const dy = [1, 1, 0, -1, -1, -1, 0, 1];
  const visitedNodes = new Set();
  const visitedEdges = new Set();

  let cx = 0;
  let cy = 0;
  visitedNodes.add(`${cx},${cy}`);

  for (const arrow of arrows) {
    for (let i = 0; i < 2; i++) {
      const nx = cx + dx[arrow];
      const ny = cy + dy[arrow];

      const node = `${nx},${ny}`;
      const edge = `${cx},${cy}-${nx},${ny}`;
      const reversedEdge = `${nx},${ny}-${cx},${cy}`;

      if (visitedNodes.has(node) && !visitedEdges.has(edge)) {
        answer += 1;
      }

      visitedNodes.add(node);
      visitedEdges.add(edge);
      visitedEdges.add(reversedEdge);

      cx = nx;
      cy = ny;
    }
  }

  return answer;
}
