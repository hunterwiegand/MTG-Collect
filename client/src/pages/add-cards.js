import React, { Component } from 'react'
import { Container } from "../components/Grid";
import Form from "../components/Form"
import AddCards from "../components/AddCards"
import axios from 'axios';

class Add_Cards extends Component {

    state = {
        q: "",
        quantity: "",
        colors: [],
        mana_cost: "",
        name: "",
        type_line: "",
        rarity: "",
        oracle_text: "",
        cmc: "",
        imageUrl: "",
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
                    colors: data.colors,
                    mana_cost: data.mana_cost,
                    name: data.name,
                    type_line: data.type_line,
                    rarity: data.rarity,
                    oracle_text: data.oracle_text,
                    type: data.type,
                    cmc: data.cmc,
                    imageUrl: data.image_uris.normal
                })
            })
            // If there is an error while handling the request set the state message to inform the user to try again
            .catch(err =>
                console.log("No cards found"));
        this.setState({
            message: "No card was found, try again"
        });


    };

    // Function to add card to collection
    addCard = () => {
        console.log("name: ", this.state.name);
        console.log("amount: ", this.state.quantity);

        // Request to server to add card
        axios.post("/collection/", {
            quantity: this.state.quantity,
            colors: this.state.colors,
            mana_cost: this.state.mana_cost,
            name: this.state.name,
            type_line: this.state.type_line,
            rarity: this.state.rarity,
            oracle_text: this.state.oracle_text,
            cmc: this.state.cmc,
            imageUrl: this.state.imageUrl
        })
        .then(response => {
            console.log(response)
            if (!response.data.errmsg) {
                console.log("card added")
            } else {
                console.log('Error adding card')
            }
        }).catch(error => {
            console.log('card error: ')
            console.log(error)

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

    // Function for when the user submits the Add button
    handleAddSubmit = event => {
        event.preventDefault();

        // Run function for find cards using the API
        this.addCard();

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
            message: "Search another card!"
        })
    };

    // function used to make changes to the state
    handleInputChangeAdd = event => {
        // Create variables name and value from the event passed in as the parameter
        // name wil be the data attribute, and the value will be it's value
        const { value } = event.target;
        // Setting the state to reflect the input changes
        this.setState({
            quantity: value
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
                    <AddCards
                        imageUrl={this.state.imageUrl}
                        quantity={this.state.quantity}
                        handleInputChangeAdd={this.handleInputChangeAdd}
                        handleAddSubmit={this.handleAddSubmit}
                    />
                    // Otherwise load our message to user
                ) : (
                        <h1>{this.state.message}</h1>
                    )}
            </Container>
        )
    }
}

export default Add_Cards;