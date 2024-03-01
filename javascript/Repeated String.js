function repeatedString(s, n) {
  // 1st solution
  /* if (s === "a") return n;
  let count = 0;
  let repetitions = Math.floor(n / s.length);
  let remainder = n % s.length;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      count += repetitions;
      if (i < remainder) count++;
    }
  }
  return count; */
  // 2nd solution
  let result = [];
  while (result.length < n) {
    for (let i = 0; i < s.length; i++) {
      result.length < n && result.push(s[i]);
    }
  }
  return result.filter((e) => e === "a").length;
}
let s = "aba";
let n = 10;
console.log(repeatedString(s, n));
