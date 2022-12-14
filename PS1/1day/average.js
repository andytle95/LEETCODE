// You are given an array of unique integers salary where salary[i]
// is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum
// salary.
// Answers within 10 - 5 of the actual answer will be accepted.



let average = (salary) => {
        let answer = 0;
        salary.pop();
        salary.shift();
        // salary.forEach(nums => {
        //     answer += nums;
        //     answer = answer / salary.length;
        // });
    return answer;
}

console.log(average([4000, 3000, 1000, 2000]));
console.log(average([1000, 2000, 3000]));
