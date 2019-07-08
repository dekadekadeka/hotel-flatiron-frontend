import React, { Component } from 'react'

export default class Authenticate extends Component {
    constructor(){
        super()
        this.state={
            username: "",
            password: ""
        }
}

changeHandler = (e) => {
    console.log(e.target.value)
    const name = e.target.name
    const value = e.target.value

    this.setState({
        [name]: value
    })

    }
    render() {
        return (
            <>
                <form className="auth-form">
                    <label htmlFor="username">Username: </label>
                    <input type="username" 
                    name="username"   
                    value={this.state.username} 
                    onChange={this.changeHandler} />
                    <label htmlFor="password">Password: </label>
                    <input type="password" 
                    name="password"   
                    value={this.state.password} 
                    onChange={this.changeHandler} />
                </form>
                <h4>Not a member yet?</h4>
                <h4>Sign up now!</h4>
            </>
        )
    }
}
