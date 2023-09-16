/*que-24)
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

*/

let lengthOfLastWord = function(s) {
    const arr = s.trim().split(" ")
    const lastEle = [arr[arr.length-1]].join("").length

    return lastEle
};

const s = "   fly me   to   the moon  "

const l = lengthOfLastWord(s)
console.log(l)