function flatlandSpaceStations(n, c) {
    c.sort((a, b) => a-b)
    let m = c.length
    let answer = 0
    for (let i = 1; i < m; i++) {
        let max = Math.floor((c[i] - c[i-1]) / 2)
        answer = Math.max(answer, max)
    }
    return answer
}

let n = 6
let c = [0, 1, 2, 3, 4, 5]
console.log(flatlandSpaceStations(n, c))