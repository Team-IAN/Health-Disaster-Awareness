import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Home from "./components/home/Home";
import NotFound from "./components/404/NotFound.js";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import Profile from "./components/profile/Profile";
import Coronavirus from "./components/coronavirus/Coronavirus";
import actions from "./services/index";
import axios from "axios";
import Main from "./components/main/Main";
import PostArticle from "./components/Post_Article/PostArticle";
import ArticleDetails from "./components/article/ArticleDetails";
import User_Feed from "./components/user_feed/User_Feed";
import Navbar from "./components/navbar/Navbar"
import Navbar2 from "./components/navbar/Navbar2"


let apiKey = "3d317330f7724477a808676552aeec15"

var url = `http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${apiKey}`

// var headers = {
//   "X-Api-Key": 
// };


class App extends Component {
  state = {
    newsEvents: [],
    ready: false
  };

  async componentDidMount() {
    let user = await actions.isLoggedIn();
    this.setState({ ...user.data });
    let newsEvents = await axios.get(url);
    console.log(newsEvents.data);

    this.setState({
      newsEvents: newsEvents.data,
      ready: true
    });
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
      <BrowserRouter>
        {/* {this.state.userName} */}
        {/* <NavLink to="/upload-image">Upload Image</NavLink> */}
        {/* <Navbar email={this.state.email} /> */}
        <Navbar2 email={this.state.email} />
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route
            exact
            path="/sign-up"
            render={props => <SignUp {...props} setUser={this.setUser} />}
          />
          <Route
            exact
            path="/log-in"
            render={props => <LogIn {...props} setUser={this.setUser} />}
          />
          <Route
            exact
            path="/profile"
            render={props => <Profile {...props} user={this.state} />}
          />
          <Route
            exact
            path="/Coronavirus"
            render={props => <Coronavirus {...props} user={this.state} />}
          />
          <Route
            exact
            path="/home"
            render={props => (
              <Main
                {...props}
                newsEvents={this.state.newsEvents}
                ready={this.state.ready}
              />
            )}
          />
          <Route
            exact
            path="/article-details/:detail"
            render={props => (
              <ArticleDetails
                {...props}
                newsEvents={this.state.newsEvents}
                ready={this.state.ready}
                setUser={this.setUser}
              />
            )}
          />
          <Route
            exact
            path="/upload-image"
            render={props => (
              <imageUpload
                {...props}
                newsEvents={this.state.newsEvents}
                ready={this.state.ready}
              />
            )}
          />
          <Route
            exact
            path="/User_Feed"
            render={props => (
              <User_Feed
                {...props}
                user={this.state}
                newsEvents={this.state.newsEvents}
                ready={this.state.ready}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
