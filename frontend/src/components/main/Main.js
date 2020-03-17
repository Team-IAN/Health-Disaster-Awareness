import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ArticleDetails from "../article/ArticleDetails";
import { Image, Col, Row } from 'react-bootstrap';
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

  decode = (uri) => {
    this.props.history.push(decodeURIComponent(uri))

  }
  showArticles = () => {
    return this.props.newsEvents.articles.map((eachArticle, index) => {
      return (
        <container>
          <div key={index}>
            <div className="newsFeed">
              <Link style={{ textDecoration: 'none' }} key={eachArticle.publishedAt} to={`/article-details/${eachArticle.publishedAt}`}>
                <Row>
                <Col xs={6} md={4}>
                  <Image src={eachArticle.urlToImage} alt='Sorry, the image does not exist ¯\_(ツ)_/¯ ' thumbnail fluid/>
                </Col>
                <Col>
                <h1>{eachArticle.title}</h1>
                <h4>Author(s): {eachArticle.author}</h4>
                </Col>
                </Row>
              </Link>
              <br></br>
            </div>
          </div>
        </container>
      )
    })
  }

  render() {
    // console.log(this.props.newsEvents)
    return (
      <div>
        {/* <div className="coronaTracker">
            <h1>Corona Tracker here</h1>
          </div> */}
        <div className="topHeadlines">
          <h1>Top Headlines</h1>
        </div>
        {this.props.ready ? this.showArticles() : " "}
      </div>
    );
  }
}

export default Main;
