import React, { Component } from 'react';

class ArticleDetails extends Component {

    findDetails = () => {
        console.log('article detail title:',this.props.match.params.detail, this.props.newsEvents)
        let theArticle = this.props.newsEvents.articles.find(eachArticle => {
            return eachArticle.title === this.props.match.params.detail
        })
        console.log(theArticle)

        return theArticle;
    }


    showArticles = () => {
        let theArticle = this.findDetails()
            return (
                <div>
                <div className='author&publish'>
                <p>{theArticle.author}</p>
                <p>{theArticle.publishedAt}</p>
                </div>
              <div className="newsFeed">
              <img src={theArticle.urlToImage} alt=''/>
              <h1>{theArticle.title}</h1>
            </div>
            <div className="topHeadlines">
              <h1>{theArticle.description}</h1>
              </div>
              <div className="coronaTracker">
              <a rel="noopener noreferrer" target='_blank' href={theArticle.url}><h1>Read more</h1></a>
            </div>
            <div>
                  <button onClick=''>Like</button>
                  <button onClick=''>Share</button>
              </div>
              </div>
            )
        
    }
    render() {
        console.log(this.props.newsEvents)
        return (
            <div>
    {this.props.ready ? this.showArticles() : " "}
        </div>
        );
    }
}

export default ArticleDetails;