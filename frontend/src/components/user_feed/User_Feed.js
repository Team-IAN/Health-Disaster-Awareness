import React, { Component } from 'react';

class User_Feed extends Component {
    render() {
        return (
            <div>
                <div className="favoriteFeed"><h1>Favorite tiles here</h1></div>
                <div className="sharedFeed"><h1>Shared feed here</h1></div>
            </div>
        );
    }
}

export default User_Feed;