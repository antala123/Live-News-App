import React from 'react'
import otherimg from './../slide1.jpg'
const Topworld = (props) => {


    let { img, title, desc, link } = props;

    return (
        <>
            <div className="col-sm-12 col-md-4 mb-5">
                <div className="card" style={{ height: "550px" }}>
                    <img src={img ? img : otherimg} className="card-img-top" alt="fgfdg" style={{ objectFit: "cover", height: "290px" }} />
                    <div className="card-body">
                        <h5 className="card-title">{title ? title.slice(0, 30) + "..." : "There is No Title."}</h5>
                        <p className="card-text" style={{ height: "150px" }}>{desc ? desc.slice(0, 100) : "There is No Description."}</p>
                        <a href={link} target='_blank' rel='noreferrer' className="btn btn-link">Go somewhere</a>
                    </div>
                </div>
            </div>
        

        </>

    )
}

export default Topworld;