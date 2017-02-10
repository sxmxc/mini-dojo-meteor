import React, { Component, PropTypes } from 'react';


export default class OffBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <header>
          <h2>Off Boarding flow</h2>
        </header>
        <form onSubmit={this.handleSubmit} className="navbar-form navbar-left" role="search">
  <div className="form-group">
    <label></label>
    <input type="text" className="form-control text-center" placeholder="Search" onChange={this.handleChange} />
  </div>
  <button type="submit" className="btn btn-default">Search <i className="fa fa-search" aria-hidden="true"></i></button>
</form>
      </div>
    );
  }
}
