import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const loggedIn = this.props.loggedIn;
        console.log(this.props.loggedIn);
        return (
            <div>
                {/* {loggedIn ? (
                    <section>
                        <button>Search Cards</button>
                    </section>
                ) : (
                        <h1>Log in!</h1>
                    )
                } */}
                
                The user is <b>{loggedIn ? "currently" :  "not"}</b> logged in
            </div>
        )

    }
}

export default Home