import React, { Component, Fragment } from "react";
import actions from "../../services/index";

class SignUp extends Component {
  state = {};
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  state = {};
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    actions
      .signUp(this.state)
      .then(user => {
        console.log(user);
        this.props.setUser({ ...user.data });
        this.props.history.push("/home");
      })
      .catch(({ response }) => console.error(response.data));
  };
  render() {
    return (
      <Fragment>
        <h2>SignUP</h2>
        <form onSubmit={this.handleSubmit}>
        <div>
            <p>Username</p>
            <input name="userName" type="text" onChange={this.handleChange} />
          </div>
          <div>
            <p>Email</p>
            <input name="email" type="text" onChange={this.handleChange} />
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
              type="text"
              onChange={this.handleChange}
            />
          </div> */}
          <br></br>
          <input type="submit" value="Sign Up" />
        </form>
      </Fragment>
    );
  }
}

export default SignUp;
