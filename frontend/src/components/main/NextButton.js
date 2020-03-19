import React, { Component } from "react";
import Pagination from 'react-bootstrap/Pagination'

class NextButton extends Component {

    paginationBasic = () => {
        let active = 1;
        let items = [];
        for (let number = 1; number <= 5; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active} onClick={active}>
                    {number}
                </Pagination.Item>,
            );
        }
        return(
        <div>
            <Pagination size="lg">{items}</Pagination>
            <br />
        </div>
        )
    }

    render() {
        return (<div>
            {this.paginationBasic()}
        </div>
        )
    }
}

export default NextButton;
