import React from "react";
import { render } from "react-dom";

import Post from "./Post";
import postApi from "./postApi";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      postContent: null
    };
  }

  componentDidMount() {
    postApi.requestPost(Math.ceil(Math.random() * 10)).then(data => {
      this.setState({postContent: data})
    });
  }

  render() {
    return (
      <div>
        <Post {...this.state.postContent}/>
      </div>
    );
  }
}
render(<App />,
  document.getElementById("root"));