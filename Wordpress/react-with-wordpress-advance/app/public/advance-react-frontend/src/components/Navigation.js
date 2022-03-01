import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    )
  }
}

export default Navigation