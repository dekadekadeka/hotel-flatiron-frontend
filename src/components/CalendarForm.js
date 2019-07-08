import React, { Component } from 'react'
import Calendar from "react-calendar"
import Moment from "react-moment"
import moment from 'moment';
import BigForm from "./BigForm"

export default class CalendarForm extends Component {
    

    state={
        dates: new Date(),
        guests: 0,
        isOpen: false
    }

    getOptions = () =>  {
        let options = []

        for(let i=1; i <= this.props.info.capacity; i++){
            options.push(<option value={i}>{i}</option>)
        }
        return options
    }

    onChange = (dates) => this.setState({
        dates
    })

    setGuests = (e) => this.setState({
        guests: e.target.value
    })

    handleOpen = () => {
        console.log("handle open")
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        let datesArray = this.state.dates;
        let firstDay = moment(datesArray[0])
        let lastDay = moment(datesArray[1])

        let totalPrice = (lastDay.diff(firstDay, "day")) * this.props.info.price
        return (
        <>
        <div className="res-form">
        <div className="calendar">
                <Calendar selectRange={true}
                onChange={this.onChange}
                value={this.state.dates}/>
            </div>
        <div className="res-info">
            <h6>Check-in:   <Moment format="MM/DD/YYYY">{datesArray[0]}</Moment></h6>
            <h6>Check-out:   <Moment format="MM/DD/YYYY">{datesArray[1]}</Moment></h6>
            <h6>Guests:   
            <select name="capacity" 
            id="capacity"
            className="form-control"
            onChange={this.setGuests}>
                <option value="0">How many?</option>
                {this.getOptions()}
            </select></h6>
            <h6>Your Total Price: ${totalPrice}</h6>
            <button className="btn-primary" onClick={this.handleOpen}>GET IT!!!</button>
        </div>
        </div>
        {this.state.isOpen && 
        <BigForm price={totalPrice} 
        guests={this.state.guests}
        dates={this.state.dates}/>}
        </>
        )
    }
}
