function acmTeam(topic) {
  let arr = [];
  for (let i = 0; i < topic.length; i++) {
    for (let j = i + 1; j < topic.length; j++) {
      let count = 0;
      for (let k = 0; k < topic[i].length; k++) {
        if (topic[i][k] === "1" || topic[j][k] === "1") {
          count += 1;
        }
      }
      arr.push(count);
    }
  }
  console.log("arr", arr);
  let max = arr.sort((a, b) => b - a)[0];
  console.log("max", max);
  let countTeams = 0;
  for (let i of arr) {
    if (i === max) {
      countTeams += 1;
    }
  }
  return [max, countTeams];
}
const topic = ["10101", "11100", "11010", "00101"];
console.log(acmTeam(topic));
