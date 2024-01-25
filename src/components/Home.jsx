import React from 'react'
import Headline from './Headline'
import sl1 from './../slide1.jpg'
import sl2 from './../slide2.jpg'
import sl3 from './../slide3.jpg'

 const Home = (props) => {
    
        return (
            <>
                <Headline Title={props.Title} mode={props.mode} />
                <div id="carouselExampleControls" className="carousel slide col-sm-12" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img src={sl1} className="d-block w-100" alt="/" style={{ height: "670px", objectFit: "cover" }} />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={sl2} className="d-block w-100" alt="/" style={{ height: "670px", objectFit: "cover" }} />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src={sl3} className="d-block w-100" alt="/" style={{ height: "670px", objectFit: "cover" }} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </>
        )
    }

export default Home;