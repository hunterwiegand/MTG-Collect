import React, { Component } from "react"
import { Route, Link } from 'react-router-dom'
import cardBack from "./cardBack.png"
import "./styles.css"

class Home_Nav extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container-fluid h-100">
                <div className="row">
                    <div className="col collection link">
                        <div className="row ">
                            <div className="col">
                                <h1 className="mt-5 label">View Collection</h1>
                                <div className="col mt-5">
                                    <Link to="/collection" className="btn btn-link text-secondary">
                                        <img className="card-back" src={cardBack} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col add-cards link">
                        <div className="row ">
                            <div className="col">
                                <h1 className="mt-5 label">Add Cards</h1>
                                <div className="col mt-5">
                                    <Link to="/add-cards" className="btn btn-link text-secondary">
                                        <img className="card-back" src={cardBack} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col search-cards link">
                        <div className="row ">
                            <div className="col">
                                <h1 className="mt-5 label">Search Cards</h1>
                                <div className="col mt-5">
                                    <Link to="/search-cards" className="btn btn-link text-secondary">
                                        <img className="card-back" src={cardBack} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    };
};

export default Home_Nav;