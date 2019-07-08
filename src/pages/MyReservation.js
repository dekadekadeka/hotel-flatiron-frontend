import React, { Component } from 'react'
import Authenticate from "../components/Authenticate"

export default class MyReservation extends Component {
    render() {
        return (
            <div className="my-reservation">
                <div className="blue-box">
                <Authenticate />
                {/* here you can set the stuff to render after authentication is complete */}
                </div>
            </div>
        )
    }
}
