import swal from 'sweetalert';



//start node is pushed and put into the stack, then the closest unvisted node
// gets visited and then gets pushed into the stack. Continues to do this traversing
//through the grid using the row and col if statements. 

export function depthFirst(grid, startNode, finishNode){
  const visitedNodesInOrder = [];
  const neighbors = [];
  neighbors.push(startNode);
  while (neighbors.length) {
    const node = neighbors.pop(); 
    // pop out the nodes from the stack

    if (!node.isWall &&(node.isStart || !node.isVisited)) {   
       node.isVisited = true;
      visitedNodesInOrder.push(node);

      if (node === finishNode) {
      setTimeout(function(){swal("Path found", "Shortest Path Found with Depth First Search", "success");},2000); //Alert when closest node is the finish node so it returns the path as found{ //if node lands on finishnode it shows the path taken.
        return visitedNodesInOrder;
      }
      
      const {col, row} = node;
      let closestNode;
      /* when row is > 0 , closest node subtract from the row and search, 
      if it hasnt been visited the closest node gets pushed into the stack and goes next */ 
      if (row > 0) { 
        closestNode = grid[row - 1][col];
        if (!closestNode.isVisited) {
          closestNode.previousNode = node;
          neighbors.push(closestNode);
        }
      }
      /* when row < grid.length - 1 , closest node is equal to a new position to search from there 
      if it hasnt been visted then  closest node gets pushed into the stack and goes next. */ 
      if (row < grid.length - 1) {
        closestNode = grid[row + 1][col];
        if (!closestNode.isVisited) {
          closestNode.previousNode = node;
          neighbors.push(closestNode);
        }
      }
       /* when col is > 0 , closest node subtract from the col and search, 
      if it hasnt been visited the closest node gets pushed into the stack and goes next */ 
      if (col > 0) {
        closestNode = grid[row][col - 1];
        if (!closestNode.isVisited) {
          closestNode.previousNode = node;
          neighbors.push(closestNode);
        }
      }
       /* when col< grid.length - 1 , closest node adds 1 to the col in the grid, 
      if it hasnt been visted then  closest node gets pushed into the stack and goes next*/ 
      if (col < grid[0].length - 1) {
        closestNode = grid[row][col + 1];
        if (!closestNode.isVisited) {
          closestNode.previousNode = node;
          neighbors.push(closestNode);
        }
      }      
    }
  }
}