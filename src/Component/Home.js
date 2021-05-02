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
        
          <div className="card">
           <div className="container">
            <h2>Greedy Depth-First Search</h2>
            <p> 
              Depth-First Search is used for traversal and searching for graph data structures<br></br>
              Starting from the root node or our start node in our case it explores as far as it can go,<br></br>
              and then traverses to the next line of unvisted nodes until it comes to the final node.
            </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card">
            <div className="container">
            <h2>Depth First Search Algorithm</h2>
            <p>
            Depth-First Search is used for traversal and searching for graph data structures<br></br>
              Starting from the roote node or our start node in our case it explores as far as it can go,<br></br>
              and then traverses to the next line of unvisted nodes until it comes to the final node.
            </p>
           </div>
          </div>
                
          <div className="card">
          <div className="container">
            <h2>A* Algorithm</h2>
            <p>
              A* (star) search algorithm is a more refined path finding algortihm that works very similarly<br></br>
              to Djikstras. The difference lies in that it takes a heuristic approach while deciding the next node. <br></br>
              A* calculates the distance between the currently explored node and the destination and takes the total cost <br></br>
               into consideration before exploring further, This makes the algorithm more efficient than some algorithms<br></br>
               because it explores less nodes.           
            </p>
          </div>
          </div>
        </div>
     </div>
    );
  }
}
export default Home;