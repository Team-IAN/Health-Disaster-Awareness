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
<<<<<<< HEAD
        console.log(this.state.articles)
        //let reversedArticles = [...this.state.articles.reverse()]
        return this.state.articles.map((eachArticle, index) => {
            return <p key={index}><a href={eachArticle.url} target="_blank"> <img src={eachArticle.urlToImage} /><br />{eachArticle.title}</a>
                <p>Liked by {eachArticle.users.length} users.</p>
=======
        return this.state.articles.map(eachArticle => {
            return <p><a href={eachArticle.url} target="_blank"> <img src={eachArticle.urlToImage} /><br />{eachArticle.title}</a>
                <p>Liked by {eachArticle.users.length} user(s).</p>
>>>>>>> 574344e3a0351ebc3c1beb0d6961073f167c6cf9
</p>
        })
    }
    render() {
        return (
            <div>
                <iframe src="https://www.bing.com/covid" width="1500" height="1000"></iframe>
                <div className="favoriteFeed"><h1>Recently Liked Articles</h1></div>
                {this.showLikedArticles()}
                {/* <div className="sharedFeed"><h1>Shared feed here</h1></div> */}
            </div>
        );
    }
}

export default User_Feed;