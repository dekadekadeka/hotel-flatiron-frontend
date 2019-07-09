import React, { Component } from 'react'
import Authenticate from "./Authenticate"

export default class CreateAccount extends Component {
    constructor(){
        super()
        this.state={
            firstName: "",
            lastName: "",
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

    login = e => {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user:{
                    username: e.target.username.value,
                    password: e.target.password.value
                }
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res.error || res.errors)
                console.log(res)
            else
                localStorage.setItem('jwt', res.jwt)
        })
    }

    render() {
        
        return (
            <div>
                <form className="create-form" onSubmit={this.login}>
                    <label htmlFor="firstname">First Name: </label>
                    <input type="firstname" 
                    name="firstname"   
                    value={this.state.firstName} 
                    onChange={this.changeHandler} />

                    <label htmlFor="lastname">Last Name: </label>
                    <input type="lastname" 
                    name="lastname"   
                    value={this.state.lastName} 
                    onChange={this.changeHandler} />

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

                    <input type="submit" />
                </form>
            </div>
        )
    }

}
    
