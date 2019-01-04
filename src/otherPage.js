import React from "react";
import increment from "./increment"
import decrement from "./decrement"
import {connect} from "react-redux"

class OtherPage extends React.Component {
  handleIncrement = () => {
    this.props.dispatch(increment)
  };

  handleDecrement = () => {
    this.props.dispatch(decrement)
  };

  render() {
    return (
      <div>
        <h1>other pagee . .. .</h1>
        <h2>count : {this.props.count}</h2>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        count: state
    }
}

export default connect(mapStateToProps)(OtherPage);
