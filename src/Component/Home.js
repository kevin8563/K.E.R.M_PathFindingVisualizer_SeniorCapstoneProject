import React, { Component } from 'react';
import '../Home.css';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
          <div className="home-section">
          <h1>Pathfinding Visualizer</h1>
          <p> This project was created by Team KERM for our senior capstone. <br></br>
          It utilizes the javascript REACT library to demonstrate 4 different pathfinding algorithms on a 2D graph. 
          </p>
         </div>

           {/*Container makes title go above description */}
        
        <div className="row">
          <div className="card">  
            <div className="container">                                                                              
            <h2>Djikstra's Algorithm</h2>
              <p>
              Djikstra's Algorithm is one of the most well known path finding algorithms in Computer Science. <br></br>
              The algorithm works by finding the shortest distance to each unvisited node in the graph. Once a <br></br>
              node has been found it is stored in a list of visited nodes with the total travel cost to that node.<br></br>
              The algorithm continues visiting undiscovered nodes until the goal is found.
              <br></br>
              </p>
            </div>
          </div>
          <img className="u-image u-image-1" img src="https://i.ibb.co/qydRL8h/djiskstra.png" alt="" data-image-width="1088" data-image-height="600"/>
        </div>

        <div className="row">
          <div className="card">
           <div className="container">
            <h2>Greedy Best-First Search</h2>
            <p>
            Greedy best-first search algorithm always selects the path which appears best at that moment. It is <br></br>
            the combination of depth-first search and breadth-first search algorithms. It uses the heuristic <br></br>
            function and search. Best-first search allows us to take the advantages of both algorithms. With the<br></br>
            help of best-first search, at each step, we can choose the most promising node. In the best first search<br></br>
            algorithm, we expand the node which is closest to the goal node and the closest cost is estimated by <br></br>
            heuristic function i.e.f(n)= g(n).
            </p>
            </div>
          </div>
          <img  src="https://i.ibb.co/YXTxRFy/greedy-BFSPoop.png" alt="" className="u-image u-image-default u-image-1" data-image-width="1235" data-image-height="662"/>
        </div>

        <div className ="row"> 
          <div className="card">
          <div className="container">
            <h2>A* Algorithm</h2>
            <p>
              A* (star) search algorithm is a more refined path finding algortihm that works very similarly<br></br>
              to Djikstra's. The difference lies in that it takes a heuristic approach while deciding the next node. <br></br>
              A* calculates the distance between the currently explored node and the destination and takes the total cost <br></br>
               into consideration before exploring further, This makes the algorithm more efficient than some algorithms<br></br>
               because it explores less nodes.           
            </p>
          </div>
          </div>
          <img className="u-image u-image-1" img src="https://i.ibb.co/N2KGtNZ/astar.png" alt="" data-image-width="1088" data-image-height="600"/>
        </div>
          <div className="row">
          <div className="card">
            <div className="container">
            <h2>Depth First Search Algorithm</h2>
            <p>
              Depth-First Search is used for traversal and searching through graph data structures such as trees<br></br>
              Starting from the root node or the start node in our case it explores in one direction as far as it can go<br></br>
              until it reaches either the finish node or a dead end. If it reaches a dead end it backtracks until it finds a<br></br>
              new unexplored node and then continues down the new path. Depth first search is not guaranteed to find the shortest <br></br>
              path, however because it is an uninformed algorithm, it is not as memory dependent as other algorithms. <br></br>
            </p>
            
           </div>
          </div>
          <img className="u-image u-image-1" img src="https://i.ibb.co/KhrpWpQ/DFS.png" alt="" data-image-width="1088" data-image-height="600"/>
          
        </div>
     </div>
    );
  }
}
export default Home;