import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';




import TopNav from "../components/TopNav.jsx";




export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = this.getMeteorData();
  }
  getMeteorData() {
    const user = Meteor.user();
    return {
      isAuthenticated: Meteor.userId() !== null,
      currentUser: user,
    }
  }

  render() {
    return (
    <div>
      <TopNav isAuthenticated={this.state.isAuthenticated}/>
      {this.props.children}
    </div>
    );
  }
}
