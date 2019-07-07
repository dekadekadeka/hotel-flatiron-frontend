import React, { Component } from 'react'
import Calendar from "react-calendar"
import Moment from "react-moment"

export default class ReservationForm extends Component {
    state={
        // name: "",
        dates: new Date()
        // guests: ""
    }

    onChange = (dates) => this.setState({ dates })


    render() {
        let datesArray = this.state.dates;
        return (
            <div>
                The reservation form will go here
                <Calendar selectRange={true}
                onChange={this.onChange}
                value={this.state.dates}/>
                <p>Check-in: <Moment format="MM/DD/YYYY">{datesArray[0]}</Moment></p>
                <p>Check-out: <Moment format="MM/DD/YYYY">{datesArray[1]}</Moment></p>
            </div>
        )
    }
}
