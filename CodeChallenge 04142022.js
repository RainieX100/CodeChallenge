// Reversed Strings

// Complete the solution so that it reverses the string passed into it.

function solution(str) {
    let newStr = ''
    for (i = 0; i < str.length; i++) {
        newStr = str.charAt(i) + newStr
    }
    return newStr
}
