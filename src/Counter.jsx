import React, { Component } from "react";
import { connect } from "react-redux";

import { doIncrement, doDecrement } from "./actions";

class CounterComponent extends Component {
  constructor() {
    super();
    this.state = {
      countValue: null,
    };
  }

  onDecrement = () => {
    this.props.doDecrement(2);
  };

  onIncrement = () => {
    this.props.doIncrement(2);
  };
  componentDidMount() {
    this.setState({ countValue: this.props.counterValue });
  }

  render() {
    return (
      /* React.Fragment declared below. A Fragement is a div element created in react */
      <>
        <button
          onClick={this.onDecrement}
          style={{ width: "50px", height: "50px", margin: "20px" }}
        >
          {" "}
          -{" "}
        </button>
        <h1> Counter : {this.props.counterValue} </h1>
        <button
          onClick={this.onIncrement}
          style={{ width: "50px", height: "50px", margin: "20px" }}
        >
          {" "}
          +{" "}
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counterValue: state.counterValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doIncrement: (value) => dispatch(doIncrement(value)),
    doDecrement: (value) => dispatch(doDecrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
