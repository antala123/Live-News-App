import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    return (
        <>
            <nav className={`navbar navbar-expand-lg ${props.mode === "dark" ? "navbar-dark" : ""}`} style={(props.mode === "light") ? { backgroundColor: "aqua", color: "white" } : { backgroundColor: "#393845", color: "black" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{ marginLeft: "40px", fontSize: "25px" }}>LiveNews</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" >
                                <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
                            </li>
                            {/* <li className="nav-item" style={{  }}>
                                    <Link className="nav-link active" to="/Topnews">Topnews</Link>
                                </li>
                                <li className="nav-item" style={{  }}>
                                    <Link className="nav-link active" to="/Topapplenews">TopAppleNews</Link>
                                </li> */}
                            <li className="nav-item" >
                                <Link className="nav-link active" to="/TopLiveSports">TopLiveSports</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link active" to="/topheadlines">Headlines</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link active" to="/topbusiness">Business</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link active" to="/topentertainment">Entertainment</Link>
                            </li>
                            {/* <li className="nav-item" style={{ fontSize: "20px" }}>
                                <Link className="nav-link active" to="/tophealth">Health</Link>
                            </li>
                            <li className="nav-item" style={{ fontSize: "20px" }}>
                                <Link className="nav-link active" to="/topscience">Science</Link>
                            </li>
                            <li className="nav-item" style={{ fontSize: "20px" }}>
                                <Link className="nav-link active" to="/toptechnology">Technology</Link>
                            </li> */}
                        </ul>
                        <button type="button" className="btn btn-dark" onClick={props.togglemode} style={(props.mode === "light") ? { backgroundColor: "#577482", fontWeight: "bold", color: "black" } : { backgroundColor: "#06585e", color: "white", fontWeight: "bold" }}>{(props.mode === "light") ? 'Dark' : 'Light'}</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;