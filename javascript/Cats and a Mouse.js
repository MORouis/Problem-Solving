function catAndMouse(x, y, z) {
  let ac = Math.abs(x - z);
  let bc = Math.abs(y - z);
  if (ac < bc) {
    return "Cat A";
  } else if (ac > bc) {
    return "Cat B";
  } else {
    return "Mouse C";
  }
}

let x = 2;
let y = 5;
let z = 4;
catAndMouse(x, y, z);
