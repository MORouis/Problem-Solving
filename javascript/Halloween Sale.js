function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let count = 0
    /* while (p < s) {
        s -= p
        p = Math.max(p - d, m)
        count++
    } */
    while (s >= 0) {
        s -= Math.max(p, m)
        p -= d
        count++
    }
    console.log("count", count - 1)
}

let p = 20
let d = 3
let m = 6
let s = 80
howManyGames(p, d, m, s)