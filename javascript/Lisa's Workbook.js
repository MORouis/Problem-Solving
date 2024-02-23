function workbook(n, k, arr) {
    let specialProblems = 0;
    let page = 1
    for (let i = 0; i < n; i++) {
        let problems = arr[i]
        for (let j = 1; j <= problems; j++) {
            if (j === page) {
                specialProblems++
            }
            if (j !== problems && j % k === 0) {
                page++
            }
        }
        page++
    }
    console.log(specialProblems);

}

let n = 5
let k = 3
let arr = [4, 2, 6, 1, 10]
workbook(n, k, arr)