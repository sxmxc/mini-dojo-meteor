import React, { Component } from 'react';
import { Link } from 'react-router';


    export default class PublicNav extends Component {
        constructor(props) {
            super(props);

        }
        render() {
            return (
              <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                          <Link to='/' activeClassName="active" className="nav-link">Home
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to='#' activeClassName="active" className="nav-link">Services
                          </Link>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Prices</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">About Us</a>
                      </li>
                  </ul>
              </div>
            );
        }
    }
