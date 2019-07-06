import React, { Component } from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link } from "react-router-dom"
import ReservationForm from "../components/ReservationForm"

export default class Reservation extends Component {
    render() {
        return (
            <>
            <Hero hero="roomsHero">
                <Banner title="Make Reservation">
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
                </Banner>
            </Hero>
            <ReservationForm />
            </>
        )
    }
}
