function cutTheSticks(arr) {
  //solution 1
  /* let result = [];

  while (arr.length > 0) {
    result.push(arr.length);

    let min = Math.min(...arr);
    arr = arr.map((num) => num - min);
    console.log("arrDiff", arr);
    arr = arr.filter((num) => num > 0);
    console.log("arrFiltered", arr);
  }
  console.log("result", result);
  return result; */
  // solution 2
  let output = [];
  while (arr.length !== 0) {
    output.push(arr.length);
    let min = Math.min(...arr);
    for (let i = 0; i < arr.length; i++) {
      let sub = arr[i] - min;

      if (sub === 0) {
        arr.splice(i, 1);
        i -= 1; // to understand why !
      } else {
        arr[i] = sub;
      }
    }
  }
  console.log("output", output);
  return output;
}

let arr = [5, 4, 4, 2, 2, 8];
cutTheSticks(arr);
