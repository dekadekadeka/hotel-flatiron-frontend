import React from "react";
// import Authenticate from "../components/Authenticate";
import Profile from "../components/Profile";

const loggedIn = () => !!localStorage.getItem("token")

const MyReservation = () => {
  return (
    <div className="blue-box">
        {loggedIn() ? <Profile /> : "You must be logged in!!"}
      </div>
  )
}

export default MyReservation
