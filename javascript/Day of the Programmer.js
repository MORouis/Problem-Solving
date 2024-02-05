function dayOfProgrammer(year) {
  if (year >= 1700 && year <= 1917) {
    if (year % 4 === 0) {
      console.log("February has 29 days");
      return "12.09." + year;
    } else {
      console.log("February has 28 days");
      return "13.09." + year;
    }
  }
  if (year >= 1919) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      console.log("February has 29 days");
      return "12.09." + year;
    } else {
      console.log("February has 28 days");
      return "13.09." + year;
    }
  }
  if (year == 1918) return "26.09.1918";
}

let year = 2017;
console.log(dayOfProgrammer(year));
