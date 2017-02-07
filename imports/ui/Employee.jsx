import React, { Component, PropTypes } from 'react';

// Employee component - represents a single employee
export default class Employee extends Component {
  render() {
    return (
      <tr>{this.props.employee.name} {this.props.employee.position}</tr>
    );
  }
}

Employee.propTypes = {
  // This component gets the employee to display through a React prop.
  // We can use propTypes to indicate it is required
  employee: PropTypes.object.isRequired,
};
