function migratoryBirds(arr) {
  const n = arr.length;
  let visited = new Array(n).fill(false);
  let occTable = [];
  for (let i = 0; i < n; i++) {
    if (visited[i] === true) {
      continue;
    }
    let occ = 1;
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        visited[j] = true;
        occ += 1;
      }
    }
    occTable.push({ element: arr[i], occurrence: occ });
  }
  let maxOcc = 0;
  let maxOccElement = null;
  for (let k = 0; k < occTable.length; k++) {
    if (occTable[k].occurrence > maxOcc) {
      maxOcc = occTable[k].occurrence;
      maxOccElement = occTable[k].element;
    } else if (occTable[k].occurrence === maxOcc) {
      if (occTable[k].element === maxOcc) {
        maxOccElement = occTable[k].element;
      }
    }
  }
  return maxOccElement;
}

let arr = [10, 5, 10, 15, 10, 5, 5];
console.log(migratoryBirds(arr));