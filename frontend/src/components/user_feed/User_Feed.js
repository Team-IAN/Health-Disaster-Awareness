import React, { Component, Fragment } from 'react';
import actions from "../../services/index";
import PostArticle from "../Post_Article/PostArticle";
import ArticleDetails from "../article/ArticleDetails";

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
        return this.state.articles.map(eachArticle => {
            return <Fragment>
                <p><a href={eachArticle.url} target="_blank"> <img src={eachArticle.urlToImage} /><br />{eachArticle.title}</a>
                <p>Liked by {eachArticle.users.length} user(s).</p>
            </p>
            <form onSubmit={this.props.handleSubmit}>
            <input type="submit" value="Like" />
          </form>
          </Fragment>
        })
    }
    render() {
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