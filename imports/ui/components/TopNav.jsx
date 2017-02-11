import React, {Component} from 'react';
import {Link} from 'react-router';

import PublicNav from './PublicNav.jsx';
import PrivateNav from './PrivateNav.jsx';


export default class TopNav extends Component {
    constructor(props) {
        super(props);

    }
    render() {
      var nav;
      if(!this.props.isAuthenticated) {
        this.nav = <PublicNav />;
      } else {
        this.nav = <PrivateNav />;
      }
        return (
            <div className="container">
                <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
                    <button className="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/dashboard" className="navbar-brand">TBDsoft v1.0</Link>

                    {this.nav}

                </nav>
            </div>
        );
    }
}
