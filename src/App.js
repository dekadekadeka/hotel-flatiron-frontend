import React, { Component } from 'react';
import './App.css';

import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SingleRoom from "./pages/SingleRoom"
import MyReservation from "./pages/MyReservation"
import Error from "./pages/Error"

import {Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar'
import Authenticate from './components/Authenticate';

class App extends Component {


render() {
  return (
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/res/" component={MyReservation} />
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="/rooms/:slug" component={SingleRoom} />
      <Route exact path="/login" component={Authenticate} />
      <Route component={Error} />
      </Switch>
    </div>
  )
 }
}

export default App;
