import React, { Component } from 'react';
import Dropdown from '../../Components/Dropdown/DropDown';
import DropDownOptions from 'json!./Config.json';
class Home extends Component {
    render() {
        return (
            <div>
                <p>DropDown Component</p>
                <Dropdown defualtValueId="3" DropDownOptions={DropDownOptions}/>
            </div>
        );
    }
}

export default Home;
