import React, { Component } from 'react';
import CardList from './CardList/CardList';
import cardList from './CardList/ListMock';
export class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <CardList list={ cardList }></CardList>

                </div>
            </div>
        );
    }
}

export default Home;
