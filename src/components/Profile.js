import React, { Component } from "react";
// import Authenticate from "./Authenticate";

export default class Profile extends Component {
  state = {user: []}

  componentDidMount() {
    fetch("http://localhost:3000/users/113")
    .then(res => res.json())
    .then(user => {
        this.setState({user: user})
    })
  }

  getDates = () => {
    let year = Math.floor(Math.random() * (2023 - 2020) + 2020)
    let month =  Math.floor(Math.random() * (12 - 1) + 1)
    let day =  Math.floor(Math.random() * (31 - 1) + 1)
    return `${day} / ${month} / ${year}`
  }

  render() {
    if(!this.state.user.rooms){
      return null
    }
    console.log(this.state.user.rooms)
    return <div className="profile">
      <h1>Welcome {this.state.user.first_name}!!</h1>
      <h2>Here are your future reservations:</h2>
      {this.state.user.rooms.map(room => {
        return (
          <>
          <h4>{room.name}</h4>
          <h5>${room.price} per night</h5>
          <h5>date: { this.getDates() }</h5>
          <div></div>
          </>
        )
      })}
    </div>;
  }
}
