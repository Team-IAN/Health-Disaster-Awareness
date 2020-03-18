import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import actions from "../../services/index"
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar2 extends Component {
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  async componentDidMount() {
    let user = await actions.isLoggedIn();
    this.setState({ ...user.data });
  }

  setUser = user => this.setState(user);

  logOut = async () => {
    let res = await actions.logOut();
    this.setUser({
      email: null,
      createdAt: null,
      updatedAt: null,
      _id: null,
      userName: null
    }); //FIX
  };
  render() {
    return (
      <Router>
        {this.props.email ?
          <Navbar sticky="top" bg="primary" variant="dark">
            <Navbar.Brand href="/home">COVID-19 Tracker</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/user-feed">User Feed</Nav.Link>
              <Nav.Link href="/map">Map</Nav.Link>
              <Nav.Link href="/prevention">Prevention</Nav.Link>
            </Nav>
            <Nav>
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
        }
      </Router>
    );
  }
}

export default Navbar2;
