import React from "react";

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      content: props.content,
      image: props.image,
      id: props.id
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  }

  render() {
    if(!(this.state.title && this.state.content && this.state.image)) {
      return (
        <article className="preloading">
          <div className="image image--preloading"></div>
          <h1 className="header--preloading"></h1>
          <div className="content--preloading"></div>
        </article>
      );
    }
    else {
      /**
       * we re using dangerouslySetInnerHTML from React to insert content that
       * includes HTML tags into our structure; use this wisely and learn more at
       * https://facebook.github.io/react/docs/dom-elements.html#dangerouslysetinnerhtml
       */
      return (
        <article>
          <div className="image" style={{backgroundImage: 'url(' + this.state.image + ')'}}></div>
          <h1>{this.state.title}</h1>
          <div className="content" dangerouslySetInnerHTML={{__html:this.state.content}}></div>
        </article>
      );
    }
  }
}

Post.propTypes = {
  content: React.PropTypes.string,
  id: React.PropTypes.number,
  image: React.PropTypes.string,
  title: React.PropTypes.string
};

Post.defaultProps = {
  title: null,
  content: null,
  image: null
};

export default Post;