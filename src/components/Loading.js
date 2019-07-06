import React from 'react'
import loadingCircle from "../images/gif/loading-circle.gif"
export default function Loading() {
    return (
        <div className="loading">
            <h4>Rooms Data Loading...</h4>
            <img src={loadingCircle} alt={"It's loading OK"} />}
        </div>
    )
}
