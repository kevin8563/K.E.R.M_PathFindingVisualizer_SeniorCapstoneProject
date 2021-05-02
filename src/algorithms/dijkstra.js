import swal from 'sweetalert';


export function dijkstra(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  startNode.distance = 0;
  const nodes_untouched = all_nodes(grid);
  while (!!nodes_untouched.length) {
    sortNodesByDistance(nodes_untouched);
    const nearest_node = nodes_untouched.shift();
    // If we encounter a wall, we skip it.
    if (nearest_node.isWall) continue;
    // If the closest node is at a distance of infinity,
    // we must be trapped and should therefore stop.
    if (nearest_node.distance === Infinity){
    setTimeout(function(){swal("No Path found", "Cant Reach Node!", "error");},2000); //Alert when node is infinity or cant be reached
    return visitedNodesInOrder;
    }
    nearest_node.isVisited = true;
    visitedNodesInOrder.push(nearest_node);
    if (nearest_node === finishNode) return visitedNodesInOrder;
    new_untouched(nearest_node, grid);
    setTimeout(function(){swal("Path found", "Shortest Path Found with Dijkstra's!", "success");},2000); //Alert when closest node is the finish node so it returns the path as found
  }
}

function sortNodesByDistance(nodes_untouched) {
  nodes_untouched.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function new_untouched(node, grid) {
  const unvisitedtouching_nodes = untouched_nodes(node, grid);
  for (const touching_node of unvisitedtouching_nodes) {
    touching_node.distance = node.distance + 1;
    touching_node.previousNode = node;
  }
}

function untouched_nodes(node, grid) {
  const touching_nodes = [];
  const {col, row} = node;
  if (row > 0) touching_nodes.push(grid[row - 1][col]);
  if (row < grid.length - 1) touching_nodes.push(grid[row + 1][col]);
  if (col > 0) touching_nodes.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) touching_nodes.push(grid[row][col + 1]);
  return touching_nodes.filter(touching_node => !touching_node.isVisited);
}

function all_nodes(grid) {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}


export function getNodesInShortestPathOrder(finishNode) {
  const shortest_path = [];
  let selected_node = finishNode;
  while (selected_node !== null) {
    shortest_path.unshift(selected_node);
    selected_node = selected_node.previousNode;
  }
  return shortest_path;
}