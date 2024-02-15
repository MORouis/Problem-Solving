function fairRations(B) {
  let count = 0;
  if (B.filter((e) => e % 2 !== 0).length % 2 !== 0) {
    console.log("NO");
  } else {
    B.forEach((e, i) => {
      if (e % 2 !== 0) {
        B[i]++;
        B[i+1]++;
        count += 2
      }
    });
    console.log("B", B)
  }
  return count
}

let B = [3, 4];
console.log(fairRations(B));
