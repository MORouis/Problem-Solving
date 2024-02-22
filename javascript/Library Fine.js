function libraryFine(d1, m1, y1, d2, m2, y2) {
  let fine = 0;
  if (d2 < d1 && m1 === m2 && y1 === y2) return (fine = 15 * (d1 - d2));
  else if (m2 < m1 && y1 === y2) return (fine = 500 * (m1 - m2));
  else if (y1 > y2) return (fine = 10000);
  else if (d1 <= d2 || m1 <= m2 || y1 <= y2) return fine;
}
let [d1, m1, y1] = [9, 6, 2015];
let [d2, m2, y2] = [6, 6, 2015];
console.log(libraryFine(d1, m1, y1, d2, m2, y2));
