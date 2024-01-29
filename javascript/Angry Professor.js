function angryProfessor(k, a) {
  // Write your code here
  let countEarlyStudent = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      countEarlyStudent++;
    }
  }
  console.log("countEarlyStudent", countEarlyStudent);
  if (k > countEarlyStudent) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

let a = [0, -1, 2, 1];
let k = 2;
angryProfessor(k, a);
