import React, { Fragment, Component } from "react";

class UnitValue extends Component {

  render() {
      console.log("Units --> "+JSON.stringify(this.props.children))
    return (
      <Fragment>
        <select
          class="Units"
          id="unitValue1"
          name="unit"
          onChange={this.props.func}
        >
          {this.props.children.units.map(
            value1 => {
              return <option value={value1}>{value1}</option>;
            }
          )}
        </select>
      </Fragment>
    );
  }
}

export default UnitValue;
