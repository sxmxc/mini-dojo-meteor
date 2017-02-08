import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'


export default class Navigation extends Component {
  render() {
    return (
      <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <Link to="/dashboard/overview" className="nav-link active">Overview</Link>
            <span className="sr-only">(current)</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Check-In/Check-Out</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Service Orders</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">TimeClock</a>
          </li>
        </ul>

        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="nav-link" href="#">Credit Cards</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Inventory</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Store Goals</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Accounting</a>
          </li>
        </ul>

        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <Link to="/dashboard/employees" className="nav-link">Employees</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Text-A-Nerd</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Knowledge Base</a>
          </li>
        </ul>
      </nav>
    );
  }
}
