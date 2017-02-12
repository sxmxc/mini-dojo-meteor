import React, {Component} from 'react';


//Dashboard
export default class TimeClock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentWillMount() {
    this.timerID = setInterval(
      () => this.update_time(),
      1000
    );
  }
  update_time() {
    this.setState({
      date: new Date()
    });
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {

        return (
          <div className="jumbotron container-fluid">
    <h1>Time Clock</h1>
    <p>This is the Time Clock view</p>
    <div className="card">{this.state.date.toLocaleTimeString()}</div>
    <p><a className="btn btn-primary btn-lg">Learn more</a></p>
  </div>

        );
    }
}
