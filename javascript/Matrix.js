function acmTeam(topic) {
  let sum = [];
  let max = 0;
  let countTeams = 0;
  let result = [];
  for (let i = 0; i < topic.length - 1; i++) {
    for (let j = i + 1; j < topic.length; j++) {
      let rowSum = [];
      let countOne = 0;
      for (let k = 0; k < topic[i].length; k++) {
        if (topic[i][k] === 0 && topic[j][k] === 0) {
          rowSum.push(0);
        } else {
          rowSum.push(1);
          countOne += 1;
        }
      }
      sum.push(rowSum);
      max = Math.max(max, countOne);
    }
  }
  for (let i = 0; i < sum.length; i++) {
    if (sum[i].filter((e) => e === 1).length === max) {
      countTeams += 1;
    }
  }
  result.push(max, countTeams);
  return result;
}
const topic = [
  [1, 0, 1, 0, 1],
  [1, 1, 1, 0, 0],
  [1, 1, 0, 1, 0],
  [0, 0, 1, 0, 1],
];
console.log(acmTeam(topic));
