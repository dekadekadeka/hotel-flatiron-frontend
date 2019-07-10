import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import MyReservation from "./pages/MyReservation";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";
import Authenticate from "./components/Authenticate";
import Profile from "./components/Profile";
import "./App.css";

const loggedIn = !!localStorage.getItem("token");

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact path="/login" component={Authenticate} />
          <Route
            exact
            path="/reservation"
            render={() =>
              loggedIn ? <MyReservation /> : <Redirect to="/login" />
            }
          />
          <Route
            exact
            path="/profile"
            render={() => (loggedIn ? <Profile /> : <Redirect to="/login" />)}
          />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
