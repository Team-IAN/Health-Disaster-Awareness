import React, { Component } from 'react';

class Coronavirus extends Component {
    render() {
        return (
            <div>
                <p>map here</p>
                <div className="coronaMap"><iframe src="https://hgis.uw.edu/virus/" width="1500" height="1000"></iframe></div>
            </div>
        );
    }
}

export default Coronavirus;