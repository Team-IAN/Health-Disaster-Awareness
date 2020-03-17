import React, { Component } from 'react';


class Coronavirus extends Component {
    render() {
        return (
            <div>
                <div className="prevention"><a href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html" target="_blank">Prevention</a></div>
                <div className="ifSick"><a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html" target="_blank">If You Are Sick</a></div>
                <div className="coronaMap"><iframe src="https://hgis.uw.edu/virus/" width="1500" height="1000"></iframe></div>
            </div>
        );
    }
}

export default Coronavirus;