import React, { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement } from "./actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.props.decrement}>-</button> {this.props.counter}{" "}
        <button onClick={this.props.increment}>+</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(mapStateToProps, { increment, decrement })(App);
