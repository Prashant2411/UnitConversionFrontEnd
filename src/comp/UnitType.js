import React, {Component, Fragment} from "react";
import TextField from "./TextFields";
import getUnitType from "../service/UnitType";
import getUnits from "../service/Units";

class UnitType extends Component {
    constructor(props) {
        super(props);
        this.TextField = React.createRef();
        this.setUnit()
    }

    state = {
        unitType: [],
        selectedUnitType: "",
        units: []
    };

    key = Object.keys(this.state.unitType)

    setSelectedUnit = async event => {
        await this.setState({selectedUnitType: event.target.value});
        await this.setUnit()
        this.TextField.current.handleUpdatedUnit(this.state.units[0])
    }

    setDefaultUnitType = () => this.state.selectedUnitType === "" ? this.setState({selectedUnitType: this.state.unitType[0]}) : null;

    setUnit = async () => {
        await getUnitType().then(res => {
            this.setState({unitType: res.data})
        })
        await this.setDefaultUnitType()
        await getUnits(this.state.selectedUnitType).then(res => {
            this.setState({units: res.data})
        })
        this.key = await Object.keys(this.state.unitType);
    }

    componentWillMount() {
        this.setUnit()
    }

    render() {
        return (
            <Fragment>
                <div>
                    <select
                        class="Units"
                        id="unitType"
                        name="unit"
                        onChange={this.setSelectedUnit}
                    >
                        {this.key.map(value => {
                            return <option value={this.state.unitType[value]}>{this.state.unitType[value]}</option>;
                        })}
                    </select>
                </div>
                <div>
                    <br/>
                    <div>
                        <TextField ref={this.TextField}>{this.state}</TextField>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default UnitType;