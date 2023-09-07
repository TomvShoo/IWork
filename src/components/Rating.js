import React, { Component } from "react";
import { Rating } from "primereact/rating";

class Calificacion extends Component {
  constructor() {
    super();
    this.state = {
      ratingValue: null,
    };
  }

  render() {
    return (
      <div>
        <Rating
          value={this.state.ratingValue}
          onChange={(e) => this.setState({ ratingValue: e.value })}
          cancel={false}
        />
        <div>Calificación {this.state.ratingValue}</div>
      </div>
    );
  }
}

export default Calificacion;
