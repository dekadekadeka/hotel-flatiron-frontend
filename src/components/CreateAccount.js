import React, { Component } from 'react'
import Authenticate from "./Authenticate"
import { Redirect } from 'react-router-dom'

export default class CreateAccount extends Component {
    constructor(){
        super()
        this.state={
            first_name: "",
            last_name: "",
            username: "",
            password: "",
            redirect: null
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

    storeUser = e => {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user:{
                    username: this.state.username,
                    password: this.state.password,
                    first_name: this.state.first_name,
                    last_name: this.state.last_name
                }
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res.error || res.errors)
                console.log(res.errors)
            else {
                localStorage.setItem('jwt', res.jwt)
                this.setState({ redirect: <Redirect to='/rooms/' /> })
            }
        })

    }

    render() {
        
        return (
            <div>
                { this.state.redirect }
                <form className="create-form" >
                    <label htmlFor="first_name">First Name: </label>
                    <input type="first_name" 
                    name="first_name"   
                    value={this.state.first_name} 
                    onChange={this.changeHandler} />

                    <label htmlFor="last_name">Last Name: </label>
                    <input type="last_name" 
                    name="last_name"   
                    value={this.state.last_name} 
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

                    <input onClick={this.storeUser} type="submit" />
                </form>
            </div>
        )
    }

}
    
