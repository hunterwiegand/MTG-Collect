import React, { Component } from 'react'
import { Col, Row, Container } from "../Grid";
import Form from "../Form"
import './styles.css';
import API from '../../utils/API';

class Add_Cards extends Component {

    constructor() {
        super()
        this.state = {
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
    };

    getCard = () => {
        // Single word cards need %22<name>%22
        // Multi word cards need %22<firstWord>%20<secondWord>%22
        API.getCard(this.state.q)
            // .then(res => 
            //     this.setState({

            //     }))
            .then(res =>
                console.log(res.data)
            ).catch(() =>
                console.log("No cards found")
            )
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getCard();
        console.log("TEST" + this.state.q)
    };

    // function used to make changes to the state
    handleInputChange = event => {
        // Create variables name and value from the event passed in as the parameter
        // name wil be the data attribute, and the value will be it's value
        const { name, value } = event.target;
        // Setting the state to reflect the input changes
        this.setState({
            [name]: value
        });

        console.log("test")
    };

    render() {
        return (
            <Container>
                <Form>
                    q={this.state.q}>
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                </Form>
            </Container>
        )
    }
}

export default Add_Cards;