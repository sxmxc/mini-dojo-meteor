import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

import { Employees } from '../../api/employees.js';

import Employee from './Employee.jsx';

class listEmployees extends Component {
  renderEmployees() {
    return this.props.employees.map((employee) => (
      <Employee key={employee._id} employee={employee} />
    ));
  }

  render() {
    return (
      <div className="container-fluid" >

        <div className="table-responsive table-bordered">
          <form className="form-search" method="get" action="#">
              <input type="search" name="search" placeholder="Find employee.." />
              <button type="submit">Search</button>
              <i className="fa fa-search"></i>
          </form>
          <ul >
            <li><Link to="/dashboard/employees/all" role="button" activeClassName="active" className="btn btn-primary btn-block" onlyActiveOnIndex={true}>Show All</Link></li>
            <li><Link to="/dashboard/employees/onboard" activeClassName="active" className="btn btn-success btn-block" onlyActiveOnIndex={true}>New Hire</Link></li>
          </ul>
        <table className="table table-striped">

          <thead>
            <tr>

            </tr>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Location</th>
              <th>Date Employed</th>
              <th>Active</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEmployees()}
            </tbody>
        </table>
        </div>
      </div>



    );
  }
}

listEmployees.propTypes = {
  employees: PropTypes.array.isRequired,
};

export default createContainer(() => {

  const employees = Employees.find().fetch();
  return {
    employees
  };
}, listEmployees);
