/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    function getHeight(node) {
        if (node === null) return 0;
        return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
    }

    function check(node) {
        if (node === null) return true;

        const leftH = getHeight(node.left);
        const rightH = getHeight(node.right);

        if (Math.abs(leftH - rightH) > 1) return false;

        return check(node.left) && check(node.right);
    }

    return check(root);
};