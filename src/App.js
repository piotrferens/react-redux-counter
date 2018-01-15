import React, { Component } from "react";
import { connect } from "react-redux";

import { add, remove, increment, decrement } from "./actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.counter.map((c, i) => (
          <div>
            <button onClick={() => this.props.decrement(i)}>- </button> {c}
            <button onClick={() => this.props.increment(i)}> + </button>
            <br />
          </div>
        ))}
        <button onClick={this.props.add}> add counter </button>
        <button onClick={this.props.remove}> remove counter </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(mapStateToProps, { add, remove, increment, decrement })(
  App
);
