function chocolateFeast(n, c, m) {
    let countBars = Math.floor(n/c)
    let wrappers = countBars
    while (wrappers >= m) {
        countBars += Math.floor(wrappers/m)
        wrappers = Math.floor(wrappers/m) + wrappers%m
    }
    console.log("countBarsfinal", countBars)
}
let n = 6
let c = 2
let m = 2
chocolateFeast(n, c, m)