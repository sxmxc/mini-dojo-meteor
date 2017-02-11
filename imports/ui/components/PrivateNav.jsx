import React, { Component } from 'react';
import { Link } from 'react-router';


    export default class PrivateNav extends Component {
        constructor(props) {
            super(props);

        }
        render() {
            return (
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
            );
        }
    }
