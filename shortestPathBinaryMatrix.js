/**
 * @param {number[][]} grid
 * @return {number}
 */
 const shortestPathBinaryMatrix = grid => {  
  let maxRow = grid.length
  let maxCol = grid[0].length
  
  if (grid[maxRow - 1][maxCol -1] !== 0) return -1
  
  let DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1]
  ]
  
  let seen = {}  
  let stack = []  
  let prev = grid[0][0]
  
  stack.push([0 , 0])
  
  while (stack.length > 0) {
    let temp = []
    
    while (stack.length > 0) {
      let node = stack.pop()
      let curRow = node[0]
      let curCol = node[1]

      if (curRow < 0 || curRow >= maxRow || curCol < 0 || curCol >= maxCol || grid[curRow][curCol] === 1 || [curRow, curCol] in seen) continue

      grid[curRow][curCol] = prev + 1
      seen[[curRow, curCol]] = 1
      
      for (let [nextRow, nextCol] of DIRECTIONS) {
        temp.push([curRow + nextRow, curCol + nextCol])
      }
    }
    
    prev++
    stack = temp
  }
  return grid[maxRow - 1][maxCol - 1] || -1
}