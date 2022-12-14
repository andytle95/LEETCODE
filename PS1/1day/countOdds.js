// Given two non-negative integers low and high.
// Return the count of odd numbers between low and high (inclusive).

// assuming low and high are numbers.
let countOdds = (low, high) => {
    let count = 0;
    for (let i = low; i <= high; i ++) {
        if (i % 2 === 1) {
            count ++;
        }
    }
    return count;
}

console.log(countOdds(800445804, 979430543)); // 3
