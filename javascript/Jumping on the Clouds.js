function jumpingOnClouds(c) {
  let jumps = 0;
  let i = 0;
  while (i < c.length - 1) {
    i = c[i + 2] === 0 ? i + 2 : i + 1;
    jumps++;
  }
  return jumps;
}

let c = [0, 0, 1, 0, 0, 1, 0];
console.log(jumpingOnClouds(c));
