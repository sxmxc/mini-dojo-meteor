import React, { Component } from 'react';
import { Link } from 'react-router';



//Dashboard Overview
export default class OffBoard extends Component {
  constuctor() {


  }
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
          <button className="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse"
            data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/dashboard" className="navbar-brand">TBDsoft v1.0</Link>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to='/dashboard' activeClassName="active" className="nav-link">Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/settings' activeClassName="active" className="nav-link">Settings
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Help</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
