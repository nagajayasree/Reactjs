import React, { Component } from "react";
import axios from "axios";

class ApiCalls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  //   componentDidMount() {
  //   using fetchAPI
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  //   }
  async componentDidMount() {
    const { data: posts } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.setState({ posts });
    console.log(posts);
  }

  render() {
    return (
      <>
        <p>Api Calls</p>
        {this.state.data}
      </>
    );
  }
}

export default ApiCalls;
