/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const calcS = calc(s);
    const calcT = calc(t);

    return calcS === calcT;
};

var calc = function(str) {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        if (!stack.length && str[i] === '#') continue;

        if (str[i] === '#') {
            stack.pop();
        } else {
            stack.push(str[i]);
        }
    }

    return [...stack].join('');
}