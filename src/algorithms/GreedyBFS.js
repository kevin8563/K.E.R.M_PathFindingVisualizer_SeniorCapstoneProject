import swal from 'sweetalert';


export function greedyBFS(grid, startNode, finishNode) {
  if (!startNode || !finishNode || startNode === finishNode) {
    return false;
  }
  let unvisitedNodes = []; //open list
  let visitedNodesInOrder = []; //closed list
  startNode.distance = 0;
  unvisitedNodes.push(startNode);


  while (unvisitedNodes.length !== 0) {
    unvisitedNodes.sort((a, b) => a.totalDistance - b.totalDistance);
    let closestNode = unvisitedNodes.shift();
    if (closestNode === finishNode) return visitedNodesInOrder;

    closestNode.isVisited = true;
    visitedNodesInOrder.push(closestNode);

    setTimeout(function(){swal("Path found", "Shortest Path Found with Greedy BFS", "success");},2000); //Alert when closest node is the finish node so it returns the path as found


    let neighbors = getNeighbors(closestNode, grid);
    for (let neighbor of neighbors) {
      let distance = closestNode.distance + 1;
      //f(n) = h(n)
      if (neighborNotInUnvisitedNodes(neighbor, unvisitedNodes)) {
        unvisitedNodes.unshift(neighbor);
        neighbor.distance = distance;
        neighbor.totalDistance = manhattenDistance(neighbor, finishNode);
        neighbor.previousNode = closestNode;
      } else if (distance < neighbor.distance) {
        neighbor.distance = distance;
        neighbor.totalDistance = manhattenDistance(neighbor, finishNode);
        neighbor.previousNode = closestNode;
      }
    }
  }
  return visitedNodesInOrder;
}

function getNeighbors(node, grid) {
  let neighbors = [];
  let { row, col } = node;
  if (row !== 0) neighbors.push(grid[row - 1][col]);
  if (col !== grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  if (row !== grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col !== 0) neighbors.push(grid[row][col - 1]);
  return neighbors.filter(
    (neighbor) => !neighbor.isWall && !neighbor.isVisited
  );
}

function manhattenDistance(node, finishNode) {
  let x = Math.abs(node.row - finishNode.row);
  let y = Math.abs(node.col - finishNode.col);
  return x + y;
}

function neighborNotInUnvisitedNodes(neighbor, unvisitedNodes) {
  for (let node of unvisitedNodes) {
    if (node.row === neighbor.row && node.col === neighbor.col) {
      return false;
    }
  }
  return true;
}

export function getNodesInShortestPathOrder(finishNode) {
  let nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}