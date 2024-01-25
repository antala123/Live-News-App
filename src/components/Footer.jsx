import React from 'react'
const Footer = (props) => {

    return (
        <>
            <div className='container-fluid' style={(props.mode === "light") ? { backgroundColor: "#957f99" } : { backgroundColor: "#5e5c57", color: "white" }}>
                <div className="row">
                    <div className="col-12" style={{ textAlign: "center", fontWeight: "500" }}>
                        <p style={{ marginTop: "15.3px" }}>Live News - Copyright &#169; By 2023-24  </p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Footer;