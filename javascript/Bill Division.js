function bonAppetit(bill, k, b) {
  let n = bill.length;
  let sum = 0;
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (i !== k) {
      sum += bill[i];
    }
  }
  let b_actual = sum / 2
  result = (b - b_actual);
  if (b === b_actual) {
    console.log("Bon Appetit")
  } else {
    console.log(result)
  }
}
let k = 1;
let bill = [3, 10, 2, 9];
let b = 12;
bonAppetit(bill, k, b);
