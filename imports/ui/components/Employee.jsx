import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

// Employee component - represents a single employee
export default class Employee extends Component {
  render() {
    return (
      <tr className="">
        <td>{this.props.employee.username}</td>
        <td>{this.props.employee.position}</td>
        <td>{this.props.employee.location}</td>
        <td>{this.props.employee.dateHired}</td>
        <td>{this.props.employee.isActive}</td>
        <td>
          <Link to="/dashboard/employee/:employeId/edit"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
        </td>

      </tr>
    );
  }
}

Employee.propTypes = {
  // This component gets the employee to display through a React prop.
  // We can use propTypes to indicate it is required
  employee: PropTypes.object.isRequired,
};
