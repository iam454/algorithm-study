function solution(points, routes) {
  const pointMap = new Map();
  for (let i = 0; i < points.length; i++) {
    pointMap.set(i + 1, points[i]);
  }

  const robotPositions = [];

  for (const route of routes) {
    let currentPosition = pointMap.get(route[0]);
    const path = [];
    path.push(`${currentPosition[0]}_${currentPosition[1]}`);

    for (let i = 1; i < route.length; i++) {
      const nextPoint = pointMap.get(route[i]);

      let [cr, cc] = currentPosition;
      let [nr, nc] = nextPoint;

      while (cr !== nr) {
        cr += cr < nr ? 1 : -1;
        path.push(`${cr}_${cc}`);
      }
      while (cc !== nc) {
        cc += cc < nc ? 1 : -1;
        path.push(`${cr}_${cc}`);
      }
      currentPosition = [cr, cc];
    }

    robotPositions.push(path);
  }

  const maxTime = Math.max(...robotPositions.map((path) => path.length));
  let answer = 0;

  for (let i = 0; i < maxTime; i++) {
    const positionCount = new Map();

    for (const path of robotPositions) {
      const position = i < path.length ? path[i] : null;

      if (position) {
        positionCount.set(position, (positionCount.get(position) || 0) + 1);
      }
    }

    for (const count of positionCount.values()) {
      if (count > 1) {
        answer++;
      }
    }
  }

  return answer;
}
