import React, { Component } from 'react'
import Authenticate from '../components/Authenticate';
import Profile from '../components/Profile'
let tokken = localStorage.jwt

export default class MyReservation extends Component {
 
    render() {
        return (
            <div className="my-reservation">
                <div className="blue-box">
                { (tokken !== undefined ) ?
                    <div>
                      <Profile />
                    </div>
                :
                    <Authenticate /> 
                }
            
                </div>
            </div>
        )
    }
}
