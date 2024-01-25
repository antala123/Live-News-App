import React, { Component } from 'react'
import Appnews from './Appnews'
import Anews from './../apple.json'
import Headline from './Headline';

export default class Apple extends Component {
    constructor() {

        super();

        this.state = {
            inews: Anews.articles
        }
        // console.log(this.state.inews);
    }

    render() {
        return (
            <>
                <Headline mode={this.props.mode} />
                <div className="container-fluid p-5">
                    <div className="row">
                        {this.state.inews.map((singleapp) => {
                            return <Appnews key={singleapp.url} img={singleapp.urlToImage} title={singleapp.title} desc={singleapp.description} link={singleapp.url} />
                        })}
                    </div>
                </div>
            </>
        )
    }
}
