import React, {Component} from 'react';
import Node from './Node/Node';
import {dijkstra, getNodesInShortestPathOrder} from '../algorithms/dijkstra';
import {depthFirst} from '../algorithms/DFS';
import {Astar} from '../algorithms/AStar';

import {greedyBFS} from '../algorithms/GreedyBFS';
import swal from 'sweetalert';
import './PathfindingVisualizer.css';



{/* Creates individual nodes(start and end nodes), which turn into a grid */}
const START_NODE_ROW = Math.floor(Math.random() * 11);
const START_NODE_COL = Math.floor(Math.random() * 20);
const FINISH_NODE_ROW = Math.floor(Math.random() * 11);
const FINISH_NODE_COL = Math.floor(Math.random() * 20);


export default class PathfindingVisualizer extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      mouseIsPressed: false,
    };
  }

  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({grid});
  }

  handleMouseDown(row, col) {
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({grid: newGrid, mouseIsPressed: true});
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({grid: newGrid});
  }

  handleMouseUp() {
    this.setState({mouseIsPressed: false});
  }

  animateAlogirthm(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-visited';
      }, 10 * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-shortest-path';

      }, 50 * i);
  }
}


visualizeDijkstra() {
  const {grid} = this.state;
  const startNode = grid[START_NODE_ROW][START_NODE_COL];
  const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL]
  const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
  const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
  this.animateAlogirthm(visitedNodesInOrder, nodesInShortestPathOrder);
  }

visualizeGreedy(){
  const {grid} = this.state;
  const startNode = grid[START_NODE_ROW][START_NODE_COL];
  const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
  const visitedNodesInOrder = greedyBFS(grid, startNode, finishNode);
  const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
  this.animateAlogirthm(visitedNodesInOrder, nodesInShortestPathOrder);

}
visualizeDepthFirst(){
  const {grid} = this.state;
  const startNode = grid[START_NODE_ROW][START_NODE_COL];
  const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
  const visitedNodesInOrder = depthFirst(grid, startNode, finishNode);
  const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
  this.animateAlogirthm(visitedNodesInOrder, nodesInShortestPathOrder);

}
visualizeAStar(){
  const {grid} = this.state;
  const startNode = grid[START_NODE_ROW][START_NODE_COL];
  const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
  const visitedNodesInOrder = Astar(grid, startNode, finishNode);
  const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
  this.animateAlogirthm(visitedNodesInOrder, nodesInShortestPathOrder);

}
refresh(){
    window.location.reload();
}
help(){
  swal({title: "Legend",
      text: "START NODE - Kean logo\nEND NODE - Diploma\nFUNCTIONALITY - Left click and drag to create/delete barriers",
      icon : "info",
      button: "Sounds Good!",
        });
}
  render() {
    const {grid, mouseIsPressed} = this.state;
    return (
      <>

    {/* btn-group div section creates the alogrithm buttons */}
		<div class="btn-group">
        <button class="button" onClick={() => this.visualizeDijkstra()}>
          Visualize Dijkstra's Algorithm
        </button>

		<button class="button" onClick={() => this.visualizeGreedy()}>
          Visualize Greedy Best-First search
        </button>

		<button class="button" onClick={() => this.visualizeDepthFirst()}>
          Visualize Depth-First search
        </button>
    <button class="button" onClick={() => this.visualizeAStar()}>
          Visualize A* Search
        </button>
    <button class="button1" onClick={() => this.help()}>Legend</button>

    <button class="button1" onClick={() => this.refresh()}>Clear board!</button>
		</div>
    {/* End of btn-group div */}


      {/*calls to node from node.jsx*/}
		  <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const {row, col, isFinish, isStart, isWall} = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={() => this.handleMouseUp()}
                      row={row}></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
const getInitialGrid = () => {  //declares and creates 11 x 20 grid array
  const grid = [];
  for (let row = 0; row < 11; row++) {
    const currentRow = [];
    for (let col = 0; col < 20; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row) => { //takes postion and creates start and end node in grid
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    finishNodeDistance:
        Math.abs(FINISH_NODE_ROW - row) +
        Math.abs(FINISH_NODE_COL - col),
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};

const getNewGridWithWallToggled = (grid, row, col) => { //updates grid when wall is created
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};
