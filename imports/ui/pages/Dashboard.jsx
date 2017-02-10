import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import Content from '../components/Content.jsx'
import SideNav from '../components/SideNav.jsx'

//Dashboard
export default class Dashboard extends Component {
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
  componentWillMount() {
    if (!this.state.isAuthenticated) {
      browserHistory.push("/login")
    }
  }
  componentDidUpdate() {
    if (!this.state.isAuthenticated) {
      browserHistory.push("/login")
    }
  }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <SideNav />

                    <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                        <h1>Dashboard</h1>

                        <section className="row text-center placeholders">
                            {this.props.children}
                        </section>
                    </main>
                </div>
            </div>
        );
    }
}
