// 125. Valid Palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")

    return str.split('').reverse().join('') === str
};
