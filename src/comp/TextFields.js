import React, { Component, Fragment } from "react";
import "../App.css";
import UnitValue from "./UnitList";
import getValueConverted from "../service/UnitConverter";

export default class TextField extends Component {

  state = {
    value1: 0,
    unit1: "FEET",
    value2: 0,
    unit2: "FEET"
  };

  changeValue1 = async event => {
    await this.setState({ value1: event.target.value, value2: 0 });
    this.convertValue();
  };

  changeValue2 = async event => {
    await this.setState({ value2: event.target.value, value1: 0 });
    this.convertValue();
  };

  convertValue = () => {
    if (this.state.value1 === 0) {
      console.log("Inside value1 0")
      return getValueConverted(
        this.state.value1,
        this.state.unit1,
        this.state.value2,
        this.state.unit2
      ).then(res => {
        this.setState({ value1: res.data });
      });
    }
    console.log("Inside value2 0")
    return getValueConverted(
      this.state.value2,
      this.state.unit2,
      this.state.value1,
      this.state.unit1
    ).then(res => {
      this.setState({ value2: res.data });
    });
  };

  setUnit1 = async event => {
    await this.setState({ unit1: event.target.value });
    this.convertValue();
    console.log("Request --> " + JSON.stringify(this.state))
  };

  setUnit2 = async event => {
    await this.setState({ unit2: event.target.value });
    this.convertValue();
    console.log("Request --> " + JSON.stringify(this.state))
  };

  handleUpdatedUnit(value) {
    this.setState({ unit1: value, unit2: value });
    console.log("Update --> " + JSON.stringify(this.state))
  }

  render() {
    return (
      <Fragment>
        <div id="input">
          <input
            type="text"
            id="unit1Input"
            className="TextField"
            onChange={this.changeValue1}
            value={this.state.value1}
            onFocus={event => this.setState({ value2: "0", value1: "" })}
            onBlur={event =>
              this.state.value1 === "" ? this.setState({ value1: 0 }) : null
            }
            autoFocus
          />
          <UnitValue func={this.setUnit1}>{this.props.children}</UnitValue>
          <input
            type="text"
            id="unit2Input"
            className="TextField"
            onChange={this.changeValue2}
            value={this.state.value2}
            onFocus={event => this.setState({ value1: "0", value2: "" })}
            onBlur={event =>
                this.state.value2 === "" ? this.setState({value2: 0}) : null
            }
          />
          <UnitValue func={this.setUnit2}>{this.props.children}</UnitValue>
        </div>
      </Fragment>
    );
  }
}
