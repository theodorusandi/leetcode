const allPathsSourceTarget = graph => {
  const target = graph.length - 1
  
  let result = []

  const dfs = (idx, path = []) => {
    if (idx === target) {
      result.push([...path, idx])
      return
    }

    for (let i = 0; i < graph[idx].length; i++) {      
      path.push(idx)
      dfs(graph[idx][i], path)
      path.pop()
    }

    return
  }

  dfs(0)

  return result
}