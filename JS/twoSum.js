let twoSum = (nums, target) => {
    let answer = [];

    for (let i = 0; i < nums.length; i ++) {
        for (let j = i + 1; j < nums.length; j ++) {
            if (nums[i] + nums[j] === target) {
                answer.push(i, j);
            }
        }
    }
    return answer;
}
