function solution(bridge_length, weight, truck_weights) {
  let bridge = [];
  let bridgeWeight = 0;
  let time = 0;
  while (bridge.length > 0 || truck_weights.length > 0) {
    for (let truck of bridge) truck[1]++;
    for (let truck of bridge) {
      if (truck[1] > bridge_length) bridgeWeight -= bridge.shift()[0];
    }
    if (bridgeWeight + truck_weights[0] <= weight) {
      let truck = truck_weights.shift();
      bridge.push([truck, 1]);
      bridgeWeight += truck;
    }
    time++;
  }
  return time;
}
