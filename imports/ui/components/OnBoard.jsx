import React, { Component, PropTypes } from 'react';


export default class OnBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <header>
          <h2>On Boarding Flow</h2>
        </header>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="fName" className="form-control"  value={this.state.fName} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lName" className="form-control"  value={this.state.lName} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label>Position:</label>
          <input type="text" name="position" className="form-control"  value={this.state.position} onChange={this.handleChange} />
        </div>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}
