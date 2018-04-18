import React, { Component } from 'react';
import { Link } from "react-router-dom";



class Nav extends Component {
  render() {
    return (

    <div className="headerWrapper">
      <div className="navBar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/">Log Out</Link>
          </li>
        </ul>
      </div>

    </div>
    );
  }
}

export default Nav;
