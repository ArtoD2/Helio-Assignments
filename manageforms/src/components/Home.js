import React from 'react';
import {Link} from 'react-router-dom'
import {LoggedInContext} from "./LoggedInContext"

function Home(props) {
    
    let {users, loggedIn} = React.useContext(LoggedInContext)
    
    const isLoggedIn = () => {

        if (loggedIn) {
            return (<h3>Logged in</h3>)
        } else {
            return (<h3>Not Logged in</h3>)
        }
    }
    
    
    return (
        <div>
            {
                users.map(user => {
                    return <li  key={user.username}>{user.username}</li>
                })
            }
            <br></br>
            <Link to="Signup">Sign Up</Link><br></br>
            <Link to="Login">Login</Link><br></br>
            <Link to="Forgotpass">Forgot Login</Link>
            {isLoggedIn()}
        </div>
    );
};

export default Home;
