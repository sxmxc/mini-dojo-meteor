import React, {Component} from 'react';

import Content from '../components/Content.jsx'
import SideNav from '../components/SideNav.jsx'

//Dashboard
export default class Dashboard extends Component {
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
