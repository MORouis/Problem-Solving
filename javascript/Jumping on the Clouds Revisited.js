function jumpingOnClouds(c, k) {
  let n = c.length;
  let e = 100;

  // first method
  let i = 0;
  while (i !== 0 || e === 100) {
    i = (i + k) % n;
    e -= c[i] === 1 ? 3 : 1;
  }

  // second method
  for (let i = k; i != 0; i += k) {
    if (i >= n) {
      i = i - n;
    }
    e -= c[i] === 1 ? 3 : 1;
    if (i === 0) break;
  }

  console.log("e", e);
}

let c = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0];
let k = 3;
jumpingOnClouds(c, k);
