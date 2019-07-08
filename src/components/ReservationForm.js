import React, { Component } from 'react'
import Calendar from "react-calendar"
import Moment from "react-moment"

export default class ReservationForm extends Component {
    

    state={
        // name: "",
        dates: new Date(),
        guests: ""
    }

    onChange = (dates) => this.setState({ 
        dates,
        guests: this.state.guests})
    render() {
        let datesArray = this.state.dates;

        return (
        <div className="res-form">
        <div className="calendar">
                <Calendar selectRange={true}
                onChange={this.onChange}
                value={this.state.dates}/>
            </div>
        <div className="res-info">
            <h6>Check-in: <Moment format="MM/DD/YYYY">{datesArray[0]}</Moment></h6>
            <h6>Check-out: <Moment format="MM/DD/YYYY">{datesArray[1]}</Moment></h6>
            <h6>Guests:</h6>
            <select name="capacity" 
            id="capacity"
            value={this.props.info.capacity}
            className="form-control"
            onChange={this.onChange}>
                <option value="capacity">{this.props.info.capacity}</option>
            </select>
        </div>
        </div>
        )
    }
}
