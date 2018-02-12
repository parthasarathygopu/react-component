import React, { Component } from 'react';
import './DropDown.css';

class Dropdown extends Component {
    selectedValue(DropDownOptions, event) {
        const DropDownValueIndex = DropDownOptions.findIndex(p => p.value == event.target.value);
        const defaultValueOption = DropDownOptions[DropDownValueIndex];
        console.log("selected value and id  is", defaultValueOption.value, defaultValueOption.id);
    }
    render() {
        const { DropDownOptions, defualtValueId } = this.props;
        // setting default value for select dropdown empty
        let defaultValueOption = '';
        // checking whether the default value id is sent as props
        if (defualtValueId) {
            // finding the index in the json corresponding to the props defualt id
            const DropDownValueIndex = DropDownOptions.findIndex(p => p.id == defualtValueId);
            // getting the value for the above finded index 
            defaultValueOption = DropDownOptions[DropDownValueIndex].value;
        }
        return (
            <div >
                <select className="dropdown" onChange={this.selectedValue.bind(this, DropDownOptions)} defaultValue={defaultValueOption} >
                    {/* displaying option value from json  */}
                    {DropDownOptions.map(DropDownOptions =>
                        <option key={DropDownOptions.id} value={DropDownOptions.value}>{DropDownOptions.value}</option>
                    )}
                </select>
                <br />
            </div>
        )
    }
}
export default Dropdown;
