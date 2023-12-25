function findDigits(n) {
  let arr = n.toString().split("").map(Number);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (n % arr[i] === 0) {
      count += 1;
    }
  }
  console.log("count", count);
}

let n = 1012;
findDigits(n);
