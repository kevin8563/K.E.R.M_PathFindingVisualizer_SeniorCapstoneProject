import swal from 'sweetalert';

export function Astar(grid, startNode, finishNode) {
    const visitedNodes = [];
    startNode.distance = 0;
    const unvisitedNodes = getGrid(grid); 
  
    while (!!unvisitedNodes.length) {
      sortByDistance(unvisitedNodes);
      const closestNode = unvisitedNodes.shift();
                                                    // If we encounter a wall, we skip it.
      if (!closestNode.isWall) {
                                              // If the closest node is at a distance of infinity,
                                                   // we must be trapped and should stop.
        if (closestNode.distance === Infinity){
          setTimeout(function(){swal("No Path found", "Cant Reach Node!", "error");},2000); //Alert when node is infinity or cant be reached
          return visitedNodes;
          }
        closestNode.isVisited = true;
        visitedNodes.push(closestNode);
        if (closestNode === finishNode) return visitedNodes;
        updateUnvisitedNeighbors(closestNode, grid);
        setTimeout(function(){swal("Path found", "Shortest Path Found with AStar", "success");},2000); //Alert when closest node is the finish node so it returns the path as found

      }
    }
  }
  
  function getGrid(grid) {        
    const nodes = [];
    for (const row of grid) {
      for (const node of row) {
        nodes.push(node);
      }
    }
    return nodes;
  }
  
  function sortByDistance(unvisitedNodes) {                                 //sorts nodes by by distance
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
  }
  
  function updateUnvisitedNeighbors(node, grid) {
    const unvisitedNeighbors = getUnvisitedNodes(node, grid);
    for (const neighbor of unvisitedNeighbors) {
      neighbor.distance = node.distance + 1 + neighbor.finishNodeDistance; //changes the way it searches by adding finishNodeDistance from neighbor
      neighbor.previousNode = node;
    }
  }
  
  function getUnvisitedNodes(node, grid) {
    const neighbors = [];
    const {col, row} = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter(neighbor => !neighbor.isVisited);
  }