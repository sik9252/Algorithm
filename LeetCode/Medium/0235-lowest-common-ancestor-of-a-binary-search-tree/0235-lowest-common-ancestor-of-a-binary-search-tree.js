/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let cur = root;
    const low = Math.min(p.val, q.val);
    const high = Math.max(p.val, q.val);

    while (cur !== null) {
        if (high < cur.val) {
            cur = cur.left;
        } else if (low > cur.val) {
            cur = cur.right;
        } else {
            return cur;
        }
    }

    return null;
};