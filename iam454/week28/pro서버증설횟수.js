function solution(players, m, k) {
  let answer = 0;
  let log = new Array(24).fill(0);
  let activeServers = 0;

  for (let i = 0; i < 24; i++) {
    if (i - k >= 0) {
      activeServers -= log[i - k];
    }

    let requiredServers = Math.floor(players[i] / m);

    if (requiredServers > activeServers) {
      let need = requiredServers - activeServers;
      activeServers += need;
      log[i] = need;
      answer += need;
    }
  }

  return answer;
}
