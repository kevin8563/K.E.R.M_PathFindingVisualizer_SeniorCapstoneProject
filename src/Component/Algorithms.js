
  import React,{ Component } from 'react';
  import PathfindingVisualizer from '../PathfindingVisualizer/PathfindingVisualizer';
  import ReactDOM from "react-dom";
  import '../Home.css';
class Algorithms extends Component {

  render() {  
    return (
      <div>
        <div className="home-section">
          <h2>Algorithms</h2>

		  	  <h1>Welcome to K.E.R.M's Pathfinding Visualizer!</h1>
          </div>

      {/* Calls the render() to display grid */}
		<PathfindingVisualizer></PathfindingVisualizer>

	  </div>
    );
  }
}

export default Algorithms;