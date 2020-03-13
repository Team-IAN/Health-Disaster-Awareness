import React, { Component, Fragment } from "react";
import actions from "../../services/index";

class LogIn extends Component {
  state = {};
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    actions
      .logIn(this.state)
      .then(user => {
        this.props.setUser({ ...user.data });
        this.props.history.push("/home");
      })
      .catch(({ response }) => console.error(response.data));
  };
  render() {
    //console.log(this.props)
    return (
      <Fragment>
        <h2>LogIn</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <p>Email</p>
            <input name="email" type="email" onChange={this.handleChange} />
          </div>
          <div>
            <p>Password</p>
            <input
              name="password"
              type="password"
              onChange={this.handleChange}
            />
          </div>
          {/* <div>
            <p>Location</p>
            <input
              name="location"
              type="location"
              onChange={this.handleChange}
            />
          </div> */}
          <br></br>
          <input type="submit" value="Login" />
        </form>
      </Fragment>
    );
  }
}

export default LogIn;
