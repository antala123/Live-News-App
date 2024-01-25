import React from 'react'


const Headline = (props) => {
    
        let title = props.Title;
        return (
            <>
                <div className='container-fluid' style={(props.mode === "light") ? { color: "black", backgroundColor: "#b9bcbd" } : { color: "white", backgroundColor: "#6a5ba3" }}>
                    <div className="row">
                        <div className="col-12" style={{ textAlign: "center", marginTop: "15px", fontWeight: "500" }}>
                            <h4>{title}</h4>
                            <p>Provide By - A Live News</p>
                        </div>
                    </div>
                </div>


            </>
        )
    }

export default Headline;