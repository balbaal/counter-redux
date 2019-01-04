import React, { Component } from "react";
import "./App.css";

import {Link} from "react-router-dom"
import {connect} from "react-redux"
import increment from "./increment"
import decrement from "./decrement"

class App extends Component {

  handleIncrement = () => {
    this.props.dispatch(increment)
  }

  handleDecrement = () => {
    this.props.dispatch(decrement)
  }

  render() {
    return (
      <div>
        <h1>welcome back   . .. .</h1>
        <h2>count : {this.props.count}</h2>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>


        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Link to="/otherpage">direct to page -> other page</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    count:state
  }
}

export default connect(mapStateToProps)(App);
