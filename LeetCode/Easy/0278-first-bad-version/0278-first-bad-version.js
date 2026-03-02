/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (isBadVersion(mid)) {
                // mid가 bad면 첫 bad는 왼쪽에 있음
                right = mid;
            } else {
                // mid가 good이면 첫 bad는 오른쪽에 있음
                left = mid + 1;
            }
        }

        // left === right가 되는 순간이 첫 bad
        return left;
    };
};