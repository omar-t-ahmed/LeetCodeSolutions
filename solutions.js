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

var isValid = function(s) {
    let chars = s.split()

    for (let i = 0; i < chars.length; i++) {
        let curr = chars[i]
        let next = chars[i + 1]

        if (curr === '(') {
            if (next !== ')') {
                return false
            }
            
        } else if (curr === '[') {
            if (next !== ']') {
                return false
            }

        } else if (curr === '{') {
            if (next !== '}') {
                return false
            }
        }
    }

    return true
};

isValid("(]")


// 150. Evaluate Reverse Polish Notation

/**
 * @param {string[]} tokens
 * @return {number}
 */

// 1. if num push it onto stack
// 2. if operand 

var evalRPN = function(tokens) {
    let numStack = []
    let operators = {'+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num1 / num2,
    }

    tokens.forEach((token) => {

        if (token in operators) {
            let num2 = numStack.pop()
            let num1 = numStack.pop()

            let res = Math.trunc(operators[token](num1, num2))

            numStack.push(res)
        } else {
            
            numStack.push(Number(token))
        }
    })

    return numStack
};