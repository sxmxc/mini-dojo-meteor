import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

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

        <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Location</th>
              <th>Date Employed</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEmployees()}
            </tbody>
        </table>
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
