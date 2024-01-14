// 125. Valid Palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")

    return str.split('').reverse().join('') === str
};

// 1929. Concatenation of Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let res = []
    j = 1
    while (j <= 2) {
        for (let i = 0; i < nums.length; i++) {
            res.push(nums[i])
        }
        j++
    }

    return res
};