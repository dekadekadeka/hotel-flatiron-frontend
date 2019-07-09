import React, { Component } from 'react'
import Authenticate from '../components/Authenticate';
let token = localStorage.jwt

export default class MyReservation extends Component {
 


    render() {
        return (
            <div className="my-reservation">
            {token !== undefined ? <div> "Hello World" </div> : <div> "Link to Login" </div>}
            </div>
        )
    }
}
