import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Greeting from "../components/Greeting"
import Home_Name from "../components/Home_Nav"
import Home_Nav from '../components/Home_Nav'

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const loggedIn = this.props.loggedIn;
        console.log(this.props.loggedIn);
        return (
            <div>
                {/* If the user is logged in, show this */}
                {loggedIn ? (
                    // Component to showcase our three options from the home screen
                    <Home_Nav></Home_Nav>
                    
                // If the user is not logged in, show this
                ) : (
                        <div>
                        {/* This is the componenet to load the welcome message */}
                        <Greeting></Greeting>
                        </div>
                    )
                }
                
                The user is <b>{loggedIn ? "currently" :  "not"}</b> logged in
            </div>

            
        )

    }
}

export default Home