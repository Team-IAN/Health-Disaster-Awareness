import React, { Component, Fragment } from "react";
import actions from "../../services/index";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button
} from "react-bootstrap";

class LogIn extends Component {
  state = {};
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    actions
      .logIn(this.state)
      .then(user => {
        console.log(user);
        this.props.setUser({ ...user.data });
        this.props.history.push("/home");
        this.props.apiCall(user)
      })
      .catch(({ response }) => console.error(response.data));
  };
  render() {
    //console.log(this.props)
    return (
      <Fragment>
        {/* <h2>LogIn</h2>
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
          <div>
            <p>Location</p>
            <input
              name="location"
              type="location"
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <input type="submit" value="Login" />
        </form> */}

        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit" value="Login">
            Log In
          </Button>
        </Form>
      </Fragment>
    );
  }
}

export default LogIn;
