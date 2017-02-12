import React, {Component} from 'react';
import { Link } from 'react-router'

import listEmployees from '../components/listEmployees.jsx'

//Dashboard
export default class Employees extends Component {
    render() {
        return (
        <div className="container-fluid">
          <header>
            <h2>Employees</h2>
          </header>

            {this.props.children}
      

        </div>
      );
    }
}
