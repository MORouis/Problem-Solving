function appendAndDelete(s, t, k) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[i]) {
      count++;
    } else {
      break;
    }
  }
  let addedInS = s.length - count;
  let addedInT = t.length - count;
  let stk = k - (addedInS + addedInT);
  if (t.length + s.length > k && stk % 2 !== 0) return "No";
  if (addedInS + addedInT <= k) return "Yes";
  else return "No";
}

let s = "hackerhappy";
let t = "hackerrank";
let k = 9;
console.log(appendAndDelete(s, t, k));
