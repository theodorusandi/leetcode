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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 const isSubtree = (root, subRoot) => {
  const isIdentical = (s, t) => {
    if (s === null && t === null) return true
    if (s === null || t === null) return false 
    return s.val === t.val && isIdentical(s.left, t.left) && isIdentical(s.right, t.right)
  }   
  
  const dfs = (node) => {
    if (node === null) return false
    if (isIdentical(node, subRoot)) return true
    return dfs(node.left) || dfs(node.right)
  }
  
  return dfs(root)
 }