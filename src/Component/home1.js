import React, { Component } from 'react';
import '../Home.css';
import '../App.css';

class Home extends Component {
  render() {
    return (
<body className="u-body">
    <section className="u-align-center u-clearfix u-grey-5 u-section-1" id="carousel_ffd9">
      <div className="u-clearfix u-sheet u-sheet-1">
        <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div className="u-gutter-0 u-layout">
            <div className="u-layout-row">
              <div className="u-align-right u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                <div className="u-border-2 u-border-grey-75 u-container-layout u-container-layout-1">
                  <h2 className="u-align-center u-text u-text-1">A* Algorithm</h2>
                  <img className="u-image u-image-1" src="images/astar.png" data-image-width="1088" data-image-height="600"/>
                </div>
              </div>
              <div className="u-container-style u-layout-cell u-shape-rectangle u-size-30 u-layout-cell-2">
                <div className="u-container-layout u-container-layout-2">
                  <p className="u-text u-text-2">A* (star) search algorithm is a more refined path finding algortihm that works very similarly<br></br>
                  to Djikstras. The difference lies in that it takes a heuristic approach while deciding the next node.<br></br>
                  A* calculates the distance between the currently explored node and the destination and takes the total cost<br></br>
                  into consideration before exploring further, This makes the algorithm more efficient than some algorithms<br></br>
                  because it explores less nodes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="u-align-center u-clearfix u-grey-5 u-section-2" id="sec-5a6a">
      <div className="u-clearfix u-sheet u-sheet-1">
        <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div className="u-gutter-0 u-layout">
            <div className="u-layout-row">
              <div className="u-align-right u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                <div className="u-container-layout u-container-layout-1">
                  <h2 className="u-align-center u-text u-text-1">Greedy-Best First Search</h2>
                  <img src="images/greedyBFSPoop2.png" alt="" className="u-image u-image-default u-image-1" data-image-width="1235" data-image-height="662"/>
                </div>
              </div>
              <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                <div className="u-border-2 u-border-grey-75 u-container-layout u-container-layout-2">
                  <p className="u-text u-text-2">Greedy best-first search algorithm always selects the path which appears best at that moment. 
                  It is the combination of depth-first search and breadth-first search algorithms. It uses the heuristic function and search. 
                  Best-first search allows us to take the advantages of both algorithms. With the help of best-first search, at each step,
                   we can choose the most promising node. In the best first search algorithm, we expand the node which is closest to the goal node
                    and the closest cost is estimated by heuristic function i.e.f(n)= g(n).<br></br>Were, h(n)= estimated cost from node n to the goal.
                    The greedy best first algorithm is implemented by the priority queue.<br><b>Advantages:</b></br>
                    <br></br>Best first search can switch between BFS and DFS by gaining the advantages of both the algorithms.<br></br>
                    This algorithm is more efficient than BFS and DFS algorithms<b>.</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="u-align-center u-clearfix u-grey-5 u-section-3" id="sec-f2d1">
      <div className="u-clearfix u-sheet u-sheet-1">
        <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div className="u-gutter-0 u-layout">
            <div className="u-layout-row">
              <div className="u-align-right u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                <div className="u-border-2 u-border-grey-75 u-container-layout u-container-layout-1">
                  <h2 className="u-align-center u-text u-text-1">Djikstra's Algorithm</h2>
                  <img src="images/deezNuts.png" alt="" className="u-image u-image-default u-image-1" data-image-width="1090" data-image-height="601"/>
                </div>
              </div>
              <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                <div className="u-container-layout u-container-layout-2">
                  <p className="u-text u-text-2">Djikstra's Algorithm is one of the most well known path finding algorithms in Computer Science.<br></br>
                  The algorithm works by finding the shortest distance to each unvisited node in the graph. Once a<br></br>
                  node has been found it is stored in a list of visited nodes with the total travel cost to that node.<br></br>
                  The algorithm continues visiting undiscovered nodes until the goal is found.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="u-align-center u-clearfix u-grey-5 u-section-4" id="sec-e220">
      <div className="u-clearfix u-sheet u-sheet-1">
        <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div className="u-gutter-0 u-layout">
            <div className="u-layout-row">
              <div className="u-align-right u-container-style u-layout-cell u-shape-rectangle u-size-30 u-layout-cell-1">
                <div className="u-container-layout u-container-layout-1">
                  <h2 className="u-align-center u-text u-text-1">Depth-First Search</h2>
                  <img src="images/depth.png" alt="" className="u-image u-image-default u-image-1" data-image-width="1090" data-image-height="599"/>
                </div>
              </div>
              <div className="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                <div className="u-border-2 u-border-grey-75 u-container-layout u-container-layout-2">
                  <p className="u-text u-text-2">Depth-First Search is used for traversal and searching for graph data structures<br></br>
                  Starting from the roote node or our start node in our case it explores as far as it can go,<br></br>and then traverses
                   to the next line of unvisted nodes until it comes to the final node.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </body>
    
    );
  }
}
export default Home;