import React from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {LoggedInProvider} from "./LoggedInContext"

import Signup from "./Signup"
import Login from "./Login"
import ForgotPass from "./ForgotPass"
import Home from "./Home"


export default function MainRouter() {

    return (
    <LoggedInProvider> 
        <Router>
            <Switch>
                <Route path="/signup">
                    <Signup></Signup>
                </Route>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/forgotpass">
                    <ForgotPass></ForgotPass>
                </Route>
                <Route path="/">
                    <Home></Home>
                </Route>
            </Switch>
        </Router>
    </LoggedInProvider>
    )
}