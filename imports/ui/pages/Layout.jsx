import React, { Component } from 'react';
import { Link } from 'react-router';




import TopNav from "../components/TopNav.jsx";
import Dashboard from "./Dashboard.jsx";




export default class Layout extends Component {
  render() {
    return (
    <div>
      <TopNav />
      {this.props.children}
    </div>






    );
  }
}
