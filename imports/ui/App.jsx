import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Employees } from '../api/employees.js';

import Employee from './Employee.jsx';

// App component - represents the whole app
class App extends Component {
  renderEmployees() {
    return this.props.employees.map((employee) => (
      <Employee key={employee._id} employee={employee} />
    ));
  }

  render() {
    return (
      <div className="container table-responsive">
        <header>
          <h2>Employees</h2>
          <form className="new-employee" onSubmit={this.handleSubmit.bind(this)} >
          <input
          type="text"
          ref="textInput"
          placeholder="Type to add new employee"
          />
          </form>
        </header>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Header</th>
            </tr>
          </thead>
          <tbody>

            <tr>{this.renderEmployees()}</tr>

          </tbody>
        </table>
      </div>



    );
  }
}

App.propTypes = {
  employees: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    employees: Employees.find({}).fetch(),
};
}, App);
