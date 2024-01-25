import React, { Component } from 'react'
import allnews from './../news.json'
import Singlenews from './Singlenews';
import Headline from './Headline';


export default class Topnews extends Component {

    constructor() {
        super();

        this.state = {
            news: allnews.articles
        }
        // console.log(this.state.news);
    }

    render() {


        return (
            <>
                <Headline mode={this.props.mode} />
                <div className='container-fluid p-5'>
                    <div className="row">
                        {this.state.news.map((single) => {
                            return <Singlenews key={single.url} img={single.urlToImage} title={single.title} desc={single.description} link={single.url} />
                        })}
                    </div>
                </div>
            </>
        )
    }
}
