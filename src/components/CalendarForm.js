import React, { Component } from 'react'
import Calendar from "react-calendar"
import Moment from "react-moment"
import moment from 'moment';
import { Link } from "react-router-dom"
// import Authenticate from "./Authenticate"

export default class CalendarForm extends Component {
    constructor(){
        super()
        this.state={
            dates: new Date(),
            guests: 0,
            // firstName: "",
            // lastName: "",
            // username:"",
            // email: "",
            // phoneNumber: "",
            // address: "",
            // password: "",
            isOpen: false
        }
    }

    getOptions = () =>  {
        let options = []

        for(let i=1; i <= this.props.info.capacity; i++){
            options.push(<option value={i}>{i}</option>)
        }
        return options
    }

    setDates = (dates) => this.setState({
        dates
    })

    setGuests = (e) => this.setState({
        guests: e.target.value
    })

    changeHandler = (e) => {
        console.log("hi", e.target.value)

        this.setState({
            firstName: e.target.value
        })
    }

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
                onChange={this.setDates}
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
        <div className="blue-box">
        {/* If we use Authentication uncomment this <Authenticate /> */}
        <h2>Congratulations!</h2>
        <h4>You have reserved the {this.props.info.name}</h4>
        <Link to="/"><button className="btn-primary">Back Home</button></Link>
        {/* if we authenticate, set link to "my reservations" */}
        </div>}
        </>
        )
    }
}
