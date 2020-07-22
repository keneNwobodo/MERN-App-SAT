import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css';

class Nav extends Component {
    
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark  bg-warning">
      <Link to="/" className="text-white nav-link" >BrightMinds</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link active" href="#">Assignments</Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link text-white" href="#">Create Assignments</Link>
          </li>
          <li className="nav-item">
          <Link to="/signup" className="nav-link text-white" href="#">Register Students</Link>
          </li>
        </ul>
      </div>
</nav>
         );
    }
}
 
export default Nav;