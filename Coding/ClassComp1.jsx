import React, { Component } from "react";

export class DisplayMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello" };
  }
  render() {
    return (
      <div>
        {this.state.message} {this.props.name}
      </div>
    );
  }
}
