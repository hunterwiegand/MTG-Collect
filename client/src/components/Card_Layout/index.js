import React, { Component } from "react";
import axios from "axios";
import "./styles.css";

class Card_Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: this.props.cards
        };
    }

    // Triggers when component mounts to the DOM
    componentDidUpdate() {
        console.log("cards: ", this.state.cards)
        // this.setState({
        //     cards: this.props.cards
        // })
    };

    getQuantity = (cardUrl) => {
        let cardIndex = 0;

        for (let i = 0; i < this.state.cards.length; i++) {
            if (this.state.cards[i].imageUrl === cardUrl) {
                cardIndex = i;
            }
        };

        return this.state.cards[cardIndex].quantity;
    };

    changeQuantity = (event) => {
        console.log(event.target.getAttribute("quantity"));
    };

    // Function to find cards in user's db that match send parameters
    // findCards = (query) => {

    //     // Axios post to retrieve user's cards
    //     axios.post("/collection/get-cards", {
    //         query: query
    //     })
    //         .then(response => {

    //             console.log("res:", response)

    //             let data = response.data

    //             console.log("data: ", data)

    //             let cards = [];

    //             // For each card in user's collection, put the card into our car array
    //             data.forEach(element => {
    //                 cards.push({
    //                     imageUrl: element.imageUrl,
    //                     quantity: element.quantity,
    //                     name: element.name
    //                 });
    //             });

    //             // Set our state to contain the newly found image URLs
    //             // this.setState({ imageUrls: images });
    //             // console.log(cards)
    //             this.setState({ cards: cards });
    //         });
    // };

    renderImage(cardUrl) {
        console.log(cardUrl)

        let quantity = this.getQuantity(cardUrl);

        return (
            <div className="card">
                <img src={cardUrl} quantity={quantity} />
                <span quantity={quantity} onClick={this.changeQuantity}>{quantity}</span>
            </div>
        );
    };

    render() {

        let cardUrl = [];

        for (let i = 0; i < this.state.cards.length; i++) {
            // console.log("cards[i].url: ", this.state.cards[i].imageUrl)
            cardUrl.push(this.state.cards[i].imageUrl);
        }
        return (
            <div className="cards">
                <div className="images">
                    {cardUrl.map(cardUrl => this.renderImage(cardUrl))}
                </div>
            </div>
            
        )
    };

}

export default Card_Layout