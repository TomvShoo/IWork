import React, { Component } from "react";
import { SelectButton } from "primereact/selectbutton";

class SwitchButton extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "cliente",
    };
  }

  handleOptionChange = (option) => {
    if (this.state.selectedOption !== option) {
      this.setState({ selectedOption: option });
    }
  };

  render() {
    const options = [
      { label: "Cliente", value: "cliente" },
      { label: "Profesional", value: "profesional" },
    ];

    return (
      <div>
        <SelectButton
          value={this.state.selectedOption}
          options={options}
          onChange={(e) => this.handleOptionChange(e.value)}
        />
      </div>
    );
  }
}

export default SwitchButton;
