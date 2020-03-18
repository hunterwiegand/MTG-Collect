import React, { Component } from 'react'
import { Col, Row, Container } from "../Grid";
import Form from "../Form"
import './styles.css';
import API from '../../utils/API';
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
        legalities: [
            {
                format: "Commander",
                legality: ""
            },
            {
                format: "Modern",
                legality: ""
            },
            {
                format: "Standard",
                legality: ""
            }
        ]
    }

    getCard = () => {

        // let q = this.state.q.replace(/\s/g, "%20");
        // let params = "%22" + q + "%22";
        // MTG-API (This takes 20 sec for card info)
        // const query = "https://api.magicthegathering.io/v1/cards?name=" + params;

        // https://api.scryfall.com/cards/named?exact=black+lotus

        // const headers = {
        //     "Total-Count": "3"
        // }

        // axios
        //     .get(query, { headers })
        //     .then(res => {
        //         let data = res.data.cards[0];
        //         this.setState({
        //             quantity: data.quantity,
        //             color: data.color,
        //             manaCost: data.manaCost,
        //             name: data.name,
        //             subtypes: data.subtypes,
        //             rarity: data.rarity,
        //             text: data.text,
        //             type: data.type,
        //             cmc: data.cmc,
        //             imageUrl: data.imageUrl
        //         })
        //     }).then(
        //         console.log("text: ", this.state.text)
        //     )
        //     // If there is an error while handling the request, return the error in json format
        //     .catch(err =>
        //         console.log("No cards found"));


        let params = this.state.q.replace(/\s/g, "+");

        const query = "https://api.scryfall.com/cards/named?exact=" + params;

        console.log(query);

        const headers = {
            
        }

        axios
            .get(query, { headers })
            .then(res => {
                let data = res.data;
                console.log(res.data);
                this.setState({
                    colors: data.colors, 
                    mana_cost: data.mana_cost,
                    name: data.name,
                    type_line: data.type_line,
                    rarity: data.rarity,
                    oracle_text: data.oracle_text,
                    type: data.type,
                    cmc: data.cmc,
                    imageUrl: data.image_uris.small
                })
            })
            // If there is an error while handling the request, return the error in json format
            .catch(err =>
                console.log("No cards found"));


    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("before getCard()")
        this.getCard();
    };

    // function used to make changes to the state
    handleInputChange = event => {
        // Create variables name and value from the event passed in as the parameter
        // name wil be the data attribute, and the value will be it's value
        const { name, value } = event.target;
        // Setting the state to reflect the input changes
        this.setState({
            q: value
        });
    };

    componentDidMount = () => {
        console.log("state", this.state);
    }

    render() {
        return (
            <Container>
                <Form
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    q={this.state.q}
                />
                <img src={this.state.imageUrl}></img>
                <h1>{this.state.text}</h1>
            </Container>
        )
    }
}

export default Add_Cards;