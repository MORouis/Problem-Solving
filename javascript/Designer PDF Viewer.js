function designerPdfViewer(h, word) {
  let max = 0;
  let index = 0;
  for (let i = 0; i < word.length; i++) {
    index = word.charCodeAt(i) - 97;
    max = Math.max(max, h[index]);
  }
  let result = max * word.length;
  console.log("result", result);
}

let h = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7,
];
let word = "Oussema";
designerPdfViewer(h, word);
