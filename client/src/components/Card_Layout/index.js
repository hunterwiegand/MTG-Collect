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

    renderImage(cardUrl) {
        console.log(cardUrl)

        let quantity = this.getQuantity(cardUrl);

        return (
            <div className="card ">
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