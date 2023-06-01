var lengthOfLongestSubstring = function(s) {
    // need a count for non repeating letters
    let count = 1;
    //start with turning string to an array
    let str = s.split('');
    // need nested for loop to go through string
    for (let i = 0; i < str.length; i ++) {
        for(let j = i + 1; j < str.length; j ++) {
    // if statement to verify if letter is not
            if (str[i] !== str[j] && str[i]) {
                count ++;
            }
        }
        return count;
    }
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
