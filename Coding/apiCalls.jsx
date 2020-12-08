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
  
  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      obj
    );
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
    console.log(post);
  };


  render() {
    return (
      <>
        <p>Api Calls</p>
        <button onClick={this.handleAdd}>Add</button>
        {this.state.posts.map((post) => (
          <p>{post.title}</p>
        ))}
      </>
    );
  }
}

export default ApiCalls;
