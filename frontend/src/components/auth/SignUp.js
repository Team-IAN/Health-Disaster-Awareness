import React, { Component, Fragment, useState } from "react";
import { Form, Button, FormControl, Dropdown } from 'react-bootstrap';
import actions from "../../services/index";
import { CountryDropdown, CountryRegionData } from 'react-country-region-selector';

class SignUp extends Component {
  state = {
    country: ''
  }

  selectCountry = e => {
    this.setState({ country: e });
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    actions
      .signUp(this.state)
      .then(user => {
        console.log(user);
        this.props.setUser({ ...user.data });
        this.props.history.push("/home");
        this.props.apiCall(user)
      })
      .catch(({ response }) => console.error(response.data));
  };

  render() {
    const { country } = this.state
    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control name="userName" type="text" onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="text" onChange={this.handleChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
           </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Location</Form.Label>
            {/* <Form.Control name="location" type="text" onChange={this.handleChange} /> */}
            <br></br>
            <CountryDropdown
              value={this.state.country}
              name="location"
              valueType="short"
              onChange={e => this.selectCountry(e)} 
              />
          </Form.Group>
          <Button variant="primary" type="submit" value="Sign Up">
            Sign Up
          </Button>
        </Form>
      </Fragment>
    );
  }
}

export default SignUp;
