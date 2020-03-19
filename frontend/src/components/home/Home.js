import React, { Component } from "react";
import actions from "../../services/index";
// import './App.css';
// import axios from 'axios';

class Home extends Component {
  async componentDidMount() {
    //actions.test()
  }
  render() {
    return <div>
      <div className="frontTop">
      <h1>Welcome to the COVID-19 Tracker.</h1>
      </div>
      <div className="frontBottom">
        <h3>Get the latest Coronavirus information here, tailored to your location.</h3>
        <h4>Like your favorite articles and check the User Feed to see what other users have Liked.</h4>
      </div>
    </div>;
  }
}

export default Home;
