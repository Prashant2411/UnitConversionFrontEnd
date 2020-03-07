import React, { Fragment, Component } from "react";

class UnitValue extends Component {

  render() {
    return (
      <Fragment>
        <select
          class="Units"
          id="unitValue1"
          name="unit"
          onChange={this.props.func}
        >
          {this.props.children[this.props.children.selectedUnit].map(
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
