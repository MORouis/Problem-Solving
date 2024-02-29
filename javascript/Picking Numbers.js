function pickingNumbers(a) {
  let max = 0;
  for (let i = 0; i < a.length; i++) {
    let subArr = [];
    for (let j = 0; j < a.length; j++) {
      if (a[i] - a[j] === 0 || a[i] - a[j] === 1) subArr.push(a[j]);
    }
    max = Math.max(subArr.length, max);
  }
  return max;
}

let a = [1, 3, 3, 4, 5, 6];

console.log(pickingNumbers(a));
