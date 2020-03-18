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
        color: "",
        manaCost: "",
        name: "",
        subtypes: "",
        rarity: "",
        text: "",
        type: "",
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
        // Single word cards need %22<name>%22
        // Multi word cards need %22<firstWord>%20<secondWord>%22
        // API.getCard(this.state.q)
        //     // .then(res => 
        //     //     this.setState({

        //     //     }))
        //     .then(res =>
        //         console.log(res.data)
        //     ).catch(() =>
        //         console.log("No cards found")
        //     )
        const params = "%22" + this.state.q + "%22";

        const query = "https://api.magicthegathering.io/v1/cards?name=" + params;

        console.log(query);
        const headers = {
            "Total-Count": "3"
        }

        axios
            .get(query, { headers })
            .then(res => {
                let data = res.data.cards[0];
                this.setState({
                    quantity: data.quantity,
                    color: data.color,
                    manaCost: data.manaCost,
                    name: data.name,
                    subtypes: data.subtypes,
                    rarity: data.rarity,
                    text: data.text,
                    type: data.type,
                    cmc: data.cmc,
                    imageUrl: data.imageUrl
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
            </Container>
        )
    }
}

export default Add_Cards;