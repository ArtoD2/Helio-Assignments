import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'

export default function MainRouter (){

    return (
        <Router>
            <Switch>
                <Route path="/"><Home></Home></Route>
                <Route path="/login"><Login></Login></Route>
                <Route path="/signup"><SignUp></SignUp></Route>
            </Switch>
        </Router>
    )
}


// optional exporting method 
// export default MainRouter;