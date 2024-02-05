function countingValleys(steps, path) {
  let valleys = 0;
  let level = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      if (level === -1) {
        valleys++;
      }
      level++;
    } else {
      level--;
    }
  }
  return valleys;
}

let steps = 14;
let path = "UDDDUDUUUDDUDU";
console.log(countingValleys(steps, path));
