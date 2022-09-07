import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import CreateAccount from "./CreateAccount";

export default class Authenticate extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      isOpen: false,
      redirect: null
    };
  }

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  // login = e => {
  //   e.preventDefault();

  //   fetch("http://localhost:3000/login", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       user: {
  //         username: e.target.username.value,
  //         password: e.target.password.value
  //       }
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       if (res.error || res.errors) console.log(res);
  //       else {
  //         localStorage.setItem("token", res.jwt);
  //         this.setState({ redirect: <Redirect to="/" /> });
  //       }
  //     });
  // };

  handleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <div className="blue-box">
          <h4>{'Hotel Flatiron'}</h4>
          <br />
          {'was a team project I worked on for the Flatiron School Software Engineering Immersive Boot Camp in the summer of 2019.'}
          <br />
          {'Unfortunately, we could not finish the authentication portion on time, so this project lives on forever like this.'}
          <br />
          {'I promise we made a backend for it!'}
          <br />
          <a href="https://www.deka.ooo" target="blank">{'Deka Ambia'}</a>
          <button className="btn-primary" onClick={this.handleOpen}>
            {'Close Me'}
          </button>
        </div>
      )
    }
    return (
      <div className="blue-box">
        {this.state.redirect}
        <form className="auth-form" onSubmit={this.handleOpen}>
          <label htmlFor="username">Username: </label>
          <input
            type="username"
            name="username"
            value={this.state.username}
            onChange={this.changeHandler}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <br />
          <input className="btn-primary" type="submit" />
        </form>
        <h4>Not a member yet?</h4>
        <button className="btn-primary" onClick={this.handleOpen}>
          Sign up now!
        </button>
        {/* {this.state.isOpen && <CreateAccount />} */}
      </div>
    );
  }
}
