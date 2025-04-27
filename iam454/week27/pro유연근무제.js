function solution(schedules, timelogs, startday) {
  const n = schedules.length;
  const checks = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; i++) {
    const schedule = getTime(schedules[i]);
    const logs = timelogs[i].map((item) => getTime(item));

    logs.forEach((log) => {
      if (schedule + 10 >= log) {
        checks[i].push(true);
      } else {
        checks[i].push(false);
      }
    });
  }

  let answer = n;
  for (const check of checks) {
    let day = startday;
    for (const c of check) {
      if (day === 6 || day === 7) {
        day = (day % 7) + 1;
        continue;
      }
      if (c === false) {
        answer -= 1;
        break;
      }
      day = (day % 7) + 1;
    }
  }
  return answer;
}

function getTime(num) {
  const h = Math.floor(num / 100);
  const m = num % 100;

  return h * 60 + m;
}
