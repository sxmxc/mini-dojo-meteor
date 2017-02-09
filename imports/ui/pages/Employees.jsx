import React, {Component} from 'react';
import { Link } from 'react-router'

import listEmployees from '../components/listEmployees.jsx'

//Dashboard
export default class Employees extends Component {
    render() {
        return (
        <div className="container">
          <header>
            <h2>Employees</h2>
          </header>
          <div className="row btnList-employee" >
            <ul >
              <li><Link to="/dashboard/employees/all" role="button" activeClassName="active" className="btn btn-primary btn-block" onlyActiveOnIndex={true}>Show All</Link></li>
              <li><Link to="/dashboard/employees/onboarding" activeClassName="active" className="btn btn-success btn-block" onlyActiveOnIndex={true}>Onboarding</Link></li>
              <li><Link to="/dashboard/employees/offboarding" activeClassName="active" className="btn btn-danger btn-block" onlyActiveOnIndex={true}>Offboarding</Link></li>
            </ul>
          </div>
          {this.props.children}
        </div>
      );
    }
}