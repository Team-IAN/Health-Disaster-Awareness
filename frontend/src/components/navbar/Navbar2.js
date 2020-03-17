import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar2 extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <Navbar sticky="top" bg="primary" variant="dark">
          <Navbar.Brand href="/home">COVID-19 Tracker</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/User_Feed">User Feed</Nav.Link>
            <Nav.Link href="/Coronavirus">Corona Tracker</Nav.Link>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
            
          </Form> */}
          <Nav>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link onClick={this.logout} href="/">Logout</Nav.Link>
          <Nav.Link href="/sign-up">Sign Up</Nav.Link>
          <Nav.Link href="/log-in">Login</Nav.Link>
          </Nav>
        </Navbar>
      </Router>
    );
  }
}

export default Navbar2;
