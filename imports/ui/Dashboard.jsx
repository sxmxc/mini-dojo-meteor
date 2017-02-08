import React, {Component} from 'react';

import Content from './Content.jsx'
import Navigation from './Navigation.jsx'

//Dashboard Overview
export default class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Navigation />

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
