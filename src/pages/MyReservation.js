import React, { Component } from 'react'
import Authenticate from '../components/Authenticate';
import Profile from '../components/Profile'


const loggedIn = !!localStorage.getItem('token')

export default class MyReservation extends Component {
 
    render() {
        return (
            <div className="my-reservation">
                Content here.
            </div>
        )
    }
}
