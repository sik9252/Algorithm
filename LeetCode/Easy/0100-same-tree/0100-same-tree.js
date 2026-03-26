/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) return true; // 둘 다 없으면(null)
    if (!p || !q) return false; // 둘 중 하나만 없으면(null)
    if (p.val !== q.val) return false; // 값이 다르면

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right); // 서브트리 확인
};