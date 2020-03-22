import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Card_Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageUrls: []
        };
    }

    componentDidMount() {
        console.log("username: ", this.props.username)
        axios.post("/collection/get-cards", {
            params: {
                username: this.props.username
            }
        })
            .then(response => {
                let cards = response.data[0].cards;
                let images = this.state.imageUrls;

                cards.forEach(element => {
                    images.push(element.imageUrl)
                });

                this.setState({ imageUrls: images });
            })
    }

    render() {
        return (
            <div></div>
        )
    }

}


export default Card_Layout