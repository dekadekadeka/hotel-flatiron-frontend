import React from 'react';
import './App.css';

import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SingleRoom from "./pages/SingleRoom"
import Reservation from "./pages/Reservation"
import MyReservation from "./pages/MyReservation"
import Error from "./pages/Error"

import {Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="/rooms/:slug" component={SingleRoom} />
      <Route exact path="/reservation" component={Reservation} />
      <Route exact path="/my-reservation" component={MyReservation} />
      <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
