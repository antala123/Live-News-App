import React, { Component } from 'react'

export default class Singlenews extends Component {
    render() {

        let { img, title, desc, link } = this.props;

        return (
            <>
                <div className="col-md-4 col-sm-12 mb-5">
                    <div className="card" style={{ height: "550px" }}>
                        <img src={img} className="card-img-top" alt="/" />
                        <div className="card-body">
                            <h5 className="card-title" style={{ marginBottom: "50px" }}>{title.slice(0, 30)}</h5>
                            <p className="card-text">{desc.slice(0, 90)}</p>
                            <a href={link} rel="noopener" className="btn btn-link">Go somewhere</a>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
