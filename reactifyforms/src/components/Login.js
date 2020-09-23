import React from 'react'

export default function Login () {
    return (
        <h2>Login Page</h2>

        <p>Enter your email address and password.</p>
        <label for="Email">
            <p>Email</p>
            <input type="text" placeholder="Email" required></input>
        </label>
        <label for="Password">
            <p>Password</p>
            <input type="text" placeholder="Password" required></input>
        </label>
            <button type="submit">Login</button>
    )
}