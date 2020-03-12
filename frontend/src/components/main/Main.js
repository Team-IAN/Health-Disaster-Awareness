import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ArticleDetails from "../article/ArticleDetails";
// import axios from "axios";

class Main extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { title: "", description: "" };
  //   }

  //   handleFormSubmit = event => {
  //     event.preventDefault();
  //     const title = this.state.title;
  //     const description = this.state.description;
  //     axios
  //       .post("http://localhost:5000/api/projects", { title, description })
  //       .then(() => {
  //         // this.props.getData();
  //         this.setState({ title: "", description: "" });
  //       })
  //       .catch(error => console.log(error));
  //   };

  //   handleChange = event => {
  //     const { name, value } = event.target;
  //     this.setState({ [name]: value });
  //   };

  showArticles = () => {
      return this.props.newsEvents.articles.map((eachArticle, index) => {
          return (
              <div key={index}>
            <div className="newsFeed">
            <img src={eachArticle.urlToImage} alt=''/>
            <Link onClick='' key={eachArticle.title} to={`/article-details/${eachArticle.title}`}><h1>{eachArticle.title}</h1></Link>
          </div>

            </div>
          )
      })
  }

  render() {
      console.log(this.props.newsEvents)
    return (
        <div>
                  <div className="coronaTracker">
            <h1>Corona Tracker here</h1>
          </div>
          <div className="topHeadlines">
            <h1>Top Headlines here</h1>
            </div>
    {this.props.ready ? this.showArticles() : " "}
        </div>
    );
  }
}

export default Main;
