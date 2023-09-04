import React, { Component } from 'react';
import { SelectButton } from 'primereact/selectbutton';

class SwitchButton extends Component {
    constructor() {
      super();
      this.state = {
        selectedOption: null,
      };
    }
  
    render() {
      const options = [
        { label: 'Cliente', value: 'cliente' },
        { label: 'Profesional', value: 'profesional' },
      ];
  
      return (
        <div>
          <SelectButton
            value={this.state.selectedOption}
            options={options}
            onChange={(e) => this.setState({ selectedOption: e.value })}
          />
        </div>
      );
    }
  }
  
  export default SwitchButton;