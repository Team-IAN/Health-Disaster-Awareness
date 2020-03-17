import React, { Component, Fragment } from 'react';
import actions from "../../services/index";
// import PostArticle from "../Post_Article/PostArticle";
// import ArticleDetails from "../article/ArticleDetails";
class User_Feed extends Component {
    state = {
        articles: []
    }
    componentDidMount() {
        actions.findAllArticles().then(articles => {
            console.log(articles)
            this.setState({ articles: articles.data.allArticles })
        })
    }
    showLikedArticles = () => {
        return this.state.articles.map((eachArticle, index) => {
            return <Fragment key={index}>
                <div><a href={eachArticle.url} target="_blank"> <img src={eachArticle.urlToImage} /><br />{eachArticle.title}</a>
                <p>Liked by {eachArticle.users.length} user(s).</p>
            </div>
            <form onSubmit={this.handleSubmit} name={eachArticle.url}>
            <input type="submit" value="Like" />
          </form>
          </Fragment>
        })
    }
    findDetails = (articleURL) => {
        console.log(articleURL)
        let theArticle = this.props.newsEvents.articles.find(eachArticle => {
          return eachArticle.url.includes(articleURL);
        });
        console.log(theArticle);
        return theArticle;
      };
        handleSubmit = e => {
        e.preventDefault();
        console.log("article reference: ", e.target.name)
        let theArticle = this.findDetails(e.target.name);
        console.log("handleSubmit", theArticle)
        actions
          .likeArticle(theArticle) // {title: userInput}
          .then(resback => {
            // this.props.setUser(resback.data) not sure what this is here for
            // this.setState()
            console.log(resback)
          })
          
          .catch(({ response }) => console.error(response));
      };
    render() {
        console.log("user_feed props:", this.props)
        return (
            <div>
                <div className="favoriteFeed"><h1>Recently Liked Articles</h1></div>
                {this.showLikedArticles()}
                {/* <div className="sharedFeed"><h1>Shared feed here</h1></div> */}
            </div>
        );
    }
}
export default User_Feed;