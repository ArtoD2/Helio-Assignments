import React from 'react'

export default function SignUp () {
    return (
        <h2>Registration Page</h2>
        <h3>Fill in your information bellow</h3>

        <label for="First Name">First Name</label>
            <input id="FirstName" type="text" placeholder="First Name" required></input><br>
        <label for="Last Name">Last Name</label>   
            <input type="text" placeholder="Last Name" required></input><br>
        <label for="Email">Email</label>
            <input type="text" placeholder="Email" required></input><br>
        <label for="Phone Number">Phone Number</label>
            <input type="text" placeholder="Phone Number" required></input><br>
        <label for="Password">Password</label>
            <input type="text" placeholder="Password" required></input><br>
        <label for="VerifyPassword">Verify Password</label>
            <input type="text" placeholder="VerifyPassword" required></input><br>
        <button type="Register">Register</button>

    )
}