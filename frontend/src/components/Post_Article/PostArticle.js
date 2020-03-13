import React, { Component, Fragment } from "react";
import actions from "../../services/index";

class PostArticle extends Component {
  state = {};
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    actions
      .postArticle(this.state) // {title: userInput}
      .then(resback => {
        console.log(resback);
      })
      .catch(({ response }) => console.error(response));
  };
  render() {
    return (
      <Fragment>
        <form onSubmit={this.props.handleSubmitLike}>
       <input type="submit" value="Like" />
        </form>
        <h2>Share this article</h2>
        <form onSubmit={this.props.handleSubmit}>
        
          {/* <input name="title" type="text" onChange={this.handleChange} />
          <input name="password" type="password" onChange={this.handleChange} />
          <input name="location" type="location" onChange={this.handleChange} /> */}
          <input type="submit" value="Share" />
        </form>
      </Fragment>
    );
  }
}

export default PostArticle;
