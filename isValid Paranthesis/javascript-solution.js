/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let hashmap = new Map([["(",")"],["{","}"],["[","]"]]);

    //other cases
    if (s.length == 1) {
        return false;
    }

    let toIterate = s.split("");
    let earlyTerminate = false;

    for (let i = 0; i < s.length; i++) {
        if (hashmap.has(s[i])) {
            stack.push(s[i]);
        } else {
            if (hashmap.get(stack[stack.length-1]) == s[i]) {
                stack.pop();
            } else {
                earlyTerminate = true;
                break;
            }
        }
    }

    return !earlyTerminate && stack.length == 0;
};