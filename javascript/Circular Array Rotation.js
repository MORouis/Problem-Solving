function circularArrayRotation(a, k, queries) {
  for (let i = 0; i < k; i++) {
    a.unshift(a.pop());
  }
  for (let i = 0; i < queries.length; i++) {
    queries[i] = a[queries[i]];
  }
  console.log("queries", queries);
}

let a = [3, 4, 5];
let k = 2;
let queries = [1, 2];

circularArrayRotation(a, k, queries);
