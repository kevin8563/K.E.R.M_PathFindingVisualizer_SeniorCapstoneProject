  /* Home Page */
  import React,{ Component } from 'react';
  import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
  import Home from './Component/Home';
  import About from './Component/About';
  import Algorithms from './Component/Algorithms';
  import './App.css';
  import ReactDOM from "react-dom";
  import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';



class App extends Component {
	render() {
		return (
			<Router>
			
			<div class="logo">
			<img src="https://cdn.discordapp.com/attachments/804065468104310801/808003269573214218/a1abc998-1590-4db7-a2a3-2e1714586c88_200x200.png" height="80px" width="80px"/>
			</div>
		<div>
          <nav className="shift">
            <ul>
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/about'} className="nav-link">About Us</Link></li>
              <li><Link to={'/algorithms'} className="nav-link">Algorithms</Link></li>
            </ul>
          </nav>
      </div>

      {/* End of NAV Div */}

          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/algorithms' component={Algorithms} />
              <Route exact path='/about' component={About} />
          </Switch>    		
      </Router>
    );
  }
}

  export default App;
