import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import Greeting from "../components/Greeting"

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const loggedIn = this.props.loggedIn;
        console.log(this.props.loggedIn);
        return (
            <div>
                {loggedIn ? (
                    <section>
                    <Link to="/collection" className="btn btn-link text-secondary">
                        <span className="text-secondary">View Collection</span>
                    </Link>
                    <Link to="/add-cards" className="btn btn-link text-secondary">
                        <span className="text-secondary">Add Cards</span>
                    </Link>
                    <Link to="/search-cards" className="btn btn-link text-secondary">
                        <span className="text-secondary">Search Cards
                        </span>
                    </Link>
                </section>
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