/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s;

    let start = 0, maxLen = 1;

    const expand = (l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--; r++;
        }

        return [l + 1, r - 1];
    };

    for (let i = 0; i < s.length; i++) {
        let [l1, r1] = expand(i, i);
        if (r1 - l1 + 1 > maxLen) {
            start = l1;
            maxLen = r1 - l1 + 1;
        }

        let [l2, r2] = expand(i, i + 1);
        if (r2 - l2 + 1 > maxLen) {
            start = l2;
            maxLen = r2 - l2 + 1;
        }
    }

    return s.slice(start, start + maxLen);
};