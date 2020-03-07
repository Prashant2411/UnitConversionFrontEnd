import React, { Component, Fragment } from "react";
import TextField from "./TextFields";

const unit = [
  {
    LENGTH: ["FEET", "INCH", "YARD", "CENTIMETER"],
    VOLUME: ["LITRE", "MILLI_LITRE", "GALLON"],
    WEIGHT: ["KILO_GRAMS", "GRAMS", "TON"]
    // TEMPERATURE: ["FAHRENHEIT", "CELSIUS"]
  }
];

class UnitType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LENGTH: ["FEET", "INCH", "YARD", "CENTIMETER"],
      VOLUME: ["LITRE", "MILLI_LITRE", "GALLON"],
      WEIGHT: ["KILO_GRAMS", "GRAMS", "TON"],
      TEMPERATURE: ["FAHRENHEIT", "CELSIUS"],
      selectedUnit: "LENGTH"
    };
    this.TextField = React.createRef();
  }

  key = Object.keys(unit[0]);

  setUnit = event => {
    console.log("select--> ", event.target.value);

    this.setState({ selectedUnit: event.target.value });
    this.TextField.current.handleUpdatedUnit(this.state[event.target.value][0])
    // console.log("State -->" + this.state[event.target.value][0]);
  };

  render() {
    return (
      <Fragment>
        <div>
          <select
            class="Units"
            id="unitType"
            name="unit"
            onChange={this.setUnit}
          >
            {this.key.map(value1 => {
              return <option value={value1}>{value1}</option>;
            })}
          </select>
        </div>
        <div>
          <br />
          <div>
            <TextField ref={this.TextField}>{this.state}</TextField>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default UnitType;
