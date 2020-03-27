import React, { Component } from 'react'
import { Container } from "../components/Grid";
import Form from "../components/Form"
import axios from 'axios'

class Search_Cards extends Component {

    state = {
        q: "",
        message: "Search for a card!"
    }

    // Function for finding card info
    getCard = () => {
        // Regex to replace global spaces with "+"
        let params = this.state.q.replace(/\s/g, "+");
        // Build our http request query
        const query = "https://api.scryfall.com/cards/named?exact=" + params;

        // Axios call to hit our API and set our state variables to the data we get from the API
        axios
            .get(query)
            .then(res => {
                let data = res.data;
                this.setState({
                    imageUrl: data.image_uris.large
                })
            })
            // If there is an error while handling the request set the state message to inform the user to try again
            .catch(err =>
                console.log("No cards found", err));
        this.setState({
            message: "No card was found, try again"
        });


    };

    // Function for when the user submits the form
    handleFormSubmit = event => {
        event.preventDefault();
        // Empty out the current state for the new search
        this.setState({
            quantity: "",
            colors: [],
            mana_cost: "",
            name: "",
            type_line: "",
            rarity: "",
            oracle_text: "",
            cmc: "",
            imageUrl: "",
        })
        // Run function for find cards using the API
        this.getCard();
    };

    // function used to make changes to the state
    handleInputChange = event => {
        // Create variables name and value from the event passed in as the parameter
        // name wil be the data attribute, and the value will be it's value
        const { value } = event.target;
        // Setting the state to reflect the input changes
        this.setState({
            q: value
        });
    };

    render() {
        // Set variable to see if an image is in our state
        let isLoaded = false;
        if (this.state.imageUrl !== "") {
            isLoaded = true;
        };
        return (
            <Container>
                {/* Load our Form component to search cards */}
                <Form
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    q={this.state.q}
                />
                {/* <img src={this.state.imageUrl}></img>
                <h1>{this.state.text}</h1> */}

                {/* If an image is loaded, show component to add cards to our DB */}
                {isLoaded ? (
                    <img src={this.state.imageUrl} ref="Image of Card"></img>
                ) : (
                        <h1>{this.state.message}</h1>
                    )}
            </Container>
        )
    }
}

export default Search_Cards;