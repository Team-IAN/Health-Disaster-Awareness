import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <Navbar sticky="top" bg="primary" variant="dark">
            <Navbar.Brand href="/home">COVID-19 Tracker</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/home">Latest News</Nav.Link>
              <Nav.Link href="/user-feed">User Feed</Nav.Link>
              <Nav.Link href="/map">Map</Nav.Link>
              <Nav.Link href="/prevention">More Resources</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link onClick={this.logOut} href="/">Logout</Nav.Link>
            </Nav>
          </Navbar> :
          <Navbar sticky="top" bg="primary" variant="dark">
            <Navbar.Brand href="/home">COVID-19 Tracker</Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link href="/sign-up">Sign Up</Nav.Link>
              <Nav.Link href="/log-in">Login</Nav.Link>
            </Nav>
          </Navbar>
    </Router>
    );
  }
}

export default Navbar;
