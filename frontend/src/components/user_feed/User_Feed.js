import React, { Component } from 'react';
import actions from "../../services/index";

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
            return <li><a href={eachArticle.url} target="_blank">{eachArticle.title}</a>
         <p>Liked by: {eachArticle.userName}</p>
            </li>

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