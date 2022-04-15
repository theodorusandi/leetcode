/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 const connect = root => {
  let q = []
  
  q.push(root)
  
  while (q.length > 0) {
    let temp = []
    while (q.length > 0) {
      let node = q.shift()

      if (node === null) continue

      node.next = q[0] || null
      
      if (node.left) {
        temp.push(node.left)
      }
      
      if (node.right) {
         temp.push(node.right) 
      }
     
    }
    
    q = temp
  }
  
  return root
} 