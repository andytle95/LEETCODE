var groupAnagrams = function(strs) {
    //array that we return
    let arr = [];

    //for loop to iterate over string
    for (let i = 0; i < strs.length; i ++) {
        // the actual letters
        let letters = strs[i];
        // define sorted letters
        let anagram = letters.split('').sort().join('');
        // ok.
    }
    return arr;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
