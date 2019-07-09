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
            <>
                <form className="auth-form" onSubmit={this.login}>
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
                    <br />
                    <input className="btn-primary" type="submit" />
                </form>
                <h4>Not a member yet?</h4>
                <h4>Sign up now!</h4>
                {/* Sign up now will be a link to sign-in page 
                if we use authentication */}
            </>
        )
    }
}
