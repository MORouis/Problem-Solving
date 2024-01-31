function beautifulDays(i, j, k) {
  // Write your code here
  let count = 0;
  for (let num = i; num <= j; num++) {
    let reversedNum = Number(num.toString().split("").reverse().join(""));
    let diff = Math.abs(num - reversedNum);
    if (Number.isInteger(diff / k)) {
      count++;
    }
  }
  console.log("count", count);
}

let i = 20;
let j = 23;
let k = 6;
beautifulDays(i, j, k);
