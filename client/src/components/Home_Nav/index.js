import React, { Component} from "react"
import { Route, Link } from 'react-router-dom'
import "./styles.css"

class Home_Nav extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return(
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
        );
    };
};

export default Home_Nav;