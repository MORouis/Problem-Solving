function minimumDistances(a) {
    let n = a.length
    let min = Infinity
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (a[i] === a[j]) {
                let d = Math.abs(i - j)
                min = Math.min(d, min)
            }
        }
    }
    return min === Infinity ? -1 : min
}

let a = [7, 1, 3, 4, 1, 7, 1]
console.log(minimumDistances(a))