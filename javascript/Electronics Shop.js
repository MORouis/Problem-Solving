function getMoneySpent(keyboards, drives, b) {
  let sum = 0;
  let maxSum = -1
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      sum = keyboards[i] + drives[j];
      if (sum <= b && sum > maxSum) {
        maxSum = sum
      }
    }
  }
  console.log("maxSum", maxSum)
}
let b = 5;
let keyboards = [5];
let drives = [4];
getMoneySpent(keyboards, drives, b);
