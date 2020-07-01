import React from "react"
import Logo from "./logo.png"
import "./style.css"

function Greeting() {
    return (
        <div className="container">
            <div className="jumbotron text-center">
                <div className="row">
                    <div className="col">
                        <h1>Log in or Signup to join the</h1>
                        <img id="logo" src={Logo} />
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Greeting;