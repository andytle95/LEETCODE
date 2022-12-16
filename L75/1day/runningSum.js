// have to add all running sums in the array
// ex. [1, 3, 5, 0] = [1+3, 1+3+5, 1+3+5+0];
//i think?



let runningSum = (nums) => {
    let arr = [];
    for (let i = 0; i < nums.length; i ++) {
        let z = 0;
        let first = nums[z];
        if (first === nums[i]) {
            arr.push(first);
            z ++;
        } else {
            arr.push(nums[i] + nums[z]);
            z ++;
        }
    }
    return arr;
};
