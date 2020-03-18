import React, { Component, Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import actions from "../../services/index";

class SignUp extends Component {
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
        this.props.apiCall(user);
      })
      .catch(({ response }) => console.error(response.data));
  };

  render() {
    return (
      <Fragment>
        {/* <h2>SignUP</h2>
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
          <div>
            <p>Location</p>
            <input
              name="location"
              type="text"
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <input type="submit" value="Sign Up" />
        </form> */}
        <Form className="sign-up" onSubmit={this.handleSubmit}>
          <h4 className="text-center"> Sign Up</h4>
          <Form.Group className="text-center" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="userName"
              type="text"
              placeholder="Enter username"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="text-center" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="text"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="text-center" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="text-center" controlId="formBasicPassword">
            <Form.Label>Location</Form.Label>
            <Form.Control
              name="location"
              type="text"
              placeholder="Enter country"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button
            className="btn-lg btd-dark btn-block"
            variant="primary"
            type="submit"
            value="Sign Up"
          >
            Sign Up
          </Button>
        </Form>
      </Fragment>
    );
  }
}

export default SignUp;
