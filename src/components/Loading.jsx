import React from 'react'

const Loading = () => {

    return (
        <>
            <div className="container-fluid mt-5 text-center">
                <div className="row">
                    <div className="col-12">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <h6>Loading...</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading;