function solution(answers) {
  let one = 0;
  let two = 0;
  let three = 0;
  for (let i = 0; i < answers.length; i++) {
    if ((i % 5) + 1 === answers[i]) one++;
    if (i % 2 === 0 && answers[i] === 2) two++;
    else if (i % 8 === 1 && answers[i] === 1) two++;
    else if (i % 8 === 3 && answers[i] === 3) two++;
    else if (i % 8 === 5 && answers[i] === 4) two++;
    else if (i % 8 === 7 && answers[i] === 5) two++;
    if ((i % 10 === 0 || i % 10 === 1) && answers[i] === 3) three++;
    else if ((i % 10 === 2 || i % 10 === 3) && answers[i] === 1) three++;
    else if ((i % 10 === 4 || i % 10 === 5) && answers[i] === 2) three++;
    else if ((i % 10 === 6 || i % 10 === 7) && answers[i] === 4) three++;
    else if ((i % 10 === 8 || i % 10 === 9) && answers[i] === 5) three++;
  }
  let max = Math.max(one, two, three);
  let ans = [];
  let arr = [one, two, three];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max) ans.push(i + 1);
  }
  return ans;
}
