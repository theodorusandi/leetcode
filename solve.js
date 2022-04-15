/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 const solve = board => {
  const maxRow = board.length
  const maxCol = board[0].length  
  
  const dfs = (row, col) => {
    if (row < 0 || col < 0 || row >= maxRow || col >= maxCol || board[row][col] === "X" || board[row][col] === "*") return
    board[row][col] = "*"
    dfs(row + 1, col)
    dfs(row - 1, col)
    dfs(row, col + 1)
    dfs(row, col - 1)
  }
  
  for (let row = 0; row < maxRow; row++) {   
    for (let col = 0; col < maxCol; col++) {
      if (board[row][col] === "O" && (row === 0 || col === 0 || row === maxRow - 1 || col === maxCol - 1)) {
        dfs(row, col)
      }
    }
  }  
  
  for (let row = 0; row < maxRow; row++) {
    for (let col = 0; col < maxCol; col++) {
      if (board[row][col] === "*") {
        board[row][col] = "O";  
        continue;
      }
      
      board[row][col] = "X";
    }
  }
  
}