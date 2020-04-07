import React, { Component } from "react";
import { Container } from "../Grid";
import axios from "axios";
import Card_Layout from "../Card_Layout";

class Search_Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            colors: null,
            rarity: null,
            pT: null,
            cmc: null,
            cards: []
        };
    };

    // Function to find cards in user's db that match send parameters
    findCards = (query) => {
        console.log("query: ", query)
        // Axios post to retrieve user's cards
        axios.post("/collection/get-cards", {
            query: query
        })
            .then(response => {
                let data = response.data
                console.log("data: ", data)
                let cards = [];
                // For each card in user's collection, put the card into our car array
                data.forEach(element => {
                    cards.push({
                        imageUrl: element.imageUrl,
                        quantity: element.quantity,
                        name: element.name
                    });
                });
                console.log("card urls: ", cards)

                // Set our state to contain the newly found image URLs
                // this.setState({ imageUrls: images });
                // console.log(cards)
                this.setState({ cards: cards });
            });
    };

    // function used to make changes to the state
    handleInputChange = event => {
        // Setting the state to reflect the input changes
        this.setState({
            [event.target.name]: event.target.value
        });

        if (event.target.name === "cmc") {
            if (event.target.value !== NaN) {
                this.setState({
                    "cmc": parseInt(event.target.value)
                })
            };
        }
    };

    // Function for when the user submits the form
    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({
            cards: []
        })
        this.findCards({
            name: this.state.name,
            colors: this.state.colors,
            rarity: this.state.rarity,
            pT: this.state.pT,
            cmc: this.state.cmc
        })
    };

    render() {
        return (
            <Container>
                <form>
                    <div className="form-group">
                        <label htmlFor="Query">
                            <strong>Card Name</strong>
                        </label>
                        <input
                            className="form-control"
                            id="name"
                            type="text"
                            value={this.state.name}
                            name="name"
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="Query">
                            <strong>Rarity</strong>
                        </label>
                        <input
                            className="form-control"
                            id="rarity"
                            type="text"
                            value={this.state.rarity}
                            name="rarity"
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="Query">
                            <strong>Type</strong>
                        </label>
                        <input
                            className="form-control"
                            id="type"
                            type="text"
                            value={this.state.type}
                            name="type"
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="Query">
                            <strong>Power/Toughness</strong>
                        </label>
                        <input
                            className="form-control"
                            id="pT"
                            type="text"
                            value={this.state.pT}
                            name="pT"
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="Query">
                            <strong>Converted Mana Cost</strong>
                        </label>
                        <input
                            className="form-control"
                            id="cmc"
                            type="number"
                            value={this.state.cmc}
                            name="cmc"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="pull-right">
                        <button
                            onClick={this.handleFormSubmit}
                            type="button"
                            className="btn btn-lg btn-danger float-right"
                        >
                            Search
        </button>
                    </div>
                </form>
                {this.state.cards.length ? (
                    <Card_Layout
                        cards={this.state.cards}
                    ></Card_Layout>
                ) : (
                        <span>Search your collection</span>
                    )}

            </Container>
        )
    }
}

export default Search_Form;