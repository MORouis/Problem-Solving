function equalizeArray(arr) {
  let arrObj = {};
  for (let num of arr) {
    arrObj[num] = arrObj[num] + 1 || 1;
  }
  // let max = Math.max(...Object.values(arrObj));
  let max = 0;
  for (let i in arrObj) {
    if (arrObj[i] > max) {
      max = arrObj[i];
    }
  }
  return arr.length - max;
}

let arr = [1, 2, 3, 1, 2, 3, 3, 3];
console.log(equalizeArray(arr));
