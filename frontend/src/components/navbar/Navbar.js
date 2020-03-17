import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav>
        {this.props.email ? (
          <Fragment>
            <NavLink to="/home">Home |</NavLink>
            <NavLink onClick={this.logOut} to="/">
              Log Out |
            </NavLink>
            <NavLink to="/profile">Profile|</NavLink>
            <NavLink to="/User_Feed">User Feed |</NavLink>
            <NavLink to="/Coronavirus">Corona Tracker</NavLink>
          </Fragment>
        ) : (
          <Fragment>
            <NavLink to="/sign-up">Sign Up |</NavLink>
            <NavLink to="/log-in">Log In</NavLink>
          </Fragment>
        )}
      </nav>
    );
  }
}

export default Navbar;
