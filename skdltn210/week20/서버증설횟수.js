function solution(players, m, k) {
  let ans = 0;
  let server = [];
  for (let i = 0; i < players.length; i++) {
    while (i - server[0] >= k) {
      server.shift();
    }
    let needServer = Math.floor(players[i] / m);
    let currentServer = server.length;
    if (currentServer < needServer) {
      for (let j = 0; j < needServer - currentServer; j++) {
        server.push(i);
        ans++;
      }
    }
  }
  return ans;
}
