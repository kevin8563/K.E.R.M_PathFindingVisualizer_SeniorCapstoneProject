import React, { Component } from 'react';
import '../About.css';
import '../App.css';

class About extends Component {
  render() {
    return (
      <div className="App">
  <div className="about-section">
  <h1>TEAM K.E.R.M</h1>
  <p>Who are we?</p>
</div>

<h2 style={{textAlign:'center'}}>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src="https://i.ibb.co/zSvQn9S/grad.png"  alt="Eric" style={{width:'44%'}}/>
      <div className="container">
        <h2>Eric Garcia</h2>
        <p className="title">Project Manager</p>
        <p>I am 22 years old and am a senior at Kean University studying Computer Science.
           For the past 4 years Ive been in the NJ Air National Guard as an Information System Security Officer
           <br></br>-Cyber Security, HTML, Java, SQL, Powershell, RMF</p>
        <p>garcieri@kean.edu</p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="https://i.ibb.co/LC1pNbk/ads.jpg" alt="Mike" style={{width:'50%'}}/>
      <div className="container">
        <h2>Michael Harper</h2>
        <p className="title">Developer</p>
        <p>I am currently a 21 year old eager to pursue the industry
           of computer science. Currently I am studying Computer Science
            B.S at Kean University.<br></br>- Cyber Security, 
            Information Systems/Security, Java, PHP, C, HTML, CSS, Python, Assembly Language
</p>
        <p>harperm@kean.edu</p>
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <img src="https://i.ibb.co/rcxFsFV/IMG-7972.jpg" alt="Kevin" style={{width:'55%'}}/>
      <div className="container">
        <h2>Kevin Perez</h2>
        <p className="title">Developer</p>
        <p>I am last year student at Kean University pursuing a B.S In computer science
          I am a developer whose knowledgeable in various<br></br>
            -Front End, Back End, Java, C, R, unix,linux, and Sql</p>
        <p>perekevi@kean.edu</p>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <img src="https://i.ibb.co/ZKVKNHc/RNFBZYI.jpg" alt="Rodrigo" style={{width:'50%'}}/>
      <div className="container">
        <h2>Rodrigo Dutra</h2>
        <p className="title">Developer</p>
        <p>I am a senior at Kean University studying for a B.S in computer science
          I enjoy coding in different programming languages as well as working with databases.
          <br></br>
          -Java, HML/CSS/PHP, sql, and a heavy interest in computer security</p>
        <p>dutrar@kean.edu</p>
      </div>
    </div>
  </div>
</div>
  </div>
    );
  }
}

export default About;