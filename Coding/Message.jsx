import React, { Component } from "react";

//component to Show a message on clicking anchor element,
//if clicked once again it hides the message.
class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: true,
    };
  }

  handleClick = () => {
    this.setState({ msg: !this.state.msg });
  };

  render() {
    return (
      <>
        <a href="#" onClick={this.handleClick}>
          Show Message
        </a>
        {this.state.msg ? "" : <p>Hello World</p>}
      </>
    );
  }
}

export default Message;
