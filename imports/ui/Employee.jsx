import React, { Component, PropTypes } from 'react';

// Employee component - represents a single employee
export default class Employee extends Component {
  render() {
    return (
      <tr><td>{this.props.employee.name}</td><td>{this.props.employee.position}</td><td>{this.props.employee.location}</td><td>{this.props.employee.dateHired}</td><td>{this.props.employee.isActive}</td></tr>
    );
  }
}

Employee.propTypes = {
  // This component gets the employee to display through a React prop.
  // We can use propTypes to indicate it is required
  employee: PropTypes.object.isRequired,
};
