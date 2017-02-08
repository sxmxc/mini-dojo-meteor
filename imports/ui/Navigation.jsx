import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';


class Navigation extends Component {
  render() {
    return (
      <nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="/dashboard/overview">Overview
            </a>
            <span class="sr-only">(current)</span>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Check-In/Check-Out</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Service Orders</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">TimeClock</a>
          </li>
        </ul>

        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
            <a class="nav-link" href="#">Credit Cards</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Inventory</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Store Goals</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Accounting</a>
          </li>
        </ul>

        <ul class="nav nav-pills flex-column">
          <li class="nav-item">
            <a class="nav-link" href="/dashboard/employees">Employees</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Text-A-Nerd</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Knowledge Base</a>
          </li>
        </ul>
      </nav>
    );
  }
}
