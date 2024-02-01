function beautifulTriplets(d, arr) {
    let n = arr.length
    let count = 0
    /* for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                let triplet = []
                triplet.push(arr[i], arr[j], arr[k])
                if (arr[j] - arr[i] === d && arr[k] - arr[j] === d) {
                    count++
                }
            }
        }
    } */
    /* Optimized solution */
    for (let i = 0; i < n - 2; i++) {
        let j = i + 1;
        let k = i + 2;

        while (k < n) {
            if (arr[j] - arr[i] === d && arr[k] - arr[j] === d) {
                count++;
                j++;
                k++;
            } else if (arr[j] - arr[i] < d) {
                j++;
            } else {
                k++;
            }
        }
    }

    console.log("count", count)
}

let d = 3
let arr = [1, 2, 4, 5, 7, 8, 10]
beautifulTriplets(d, arr)