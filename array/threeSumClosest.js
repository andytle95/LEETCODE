let threeSumClosest = (nums, target) => {
    let total = 0;

    for (let i = 0; i < nums.length; i ++) {
        let number = nums[i];
    if (target === number) {
        nums.splice(i, i - 1)
        nums.unshift(target);
        total = nums[0] + nums[1] + nums[2];
    }
}
    return total;
}

// console.log(threeSumClosest([-1,2,1,-4], 1));
// console.log(threeSumClosest([0, 0, 0], 1));
console.log(threeSumClosest([0, 1, 2], 0));
