import React, {Component} from 'react';

//Dashboard
export default class Welcome extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Welcome
                    <i>{this.props.username}</i>!
                  </h1>
                <p>This is the initial dashboard screen. It is just a welcome message and maybe some kinda update info? Unsure.</p>
            </div>

        );
    }
}
