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

    // Triggers when component mounts to teh DOM
    componentDidMount() {
        // Axios post to retrieve user's cards
        axios.post("/collection/get-cards", {
            params: {
                username: this.props.username
            }
        })
            .then(response => {
                let cards = response.data[0].cards;
                let images = this.state.imageUrls;

                // For each card in user's collection, put the image URL into our images array
                cards.forEach(element => {
                    images.push(element.imageUrl)
                });

                // Set our state to contain the newly found image URLs
                this.setState({ imageUrls: images });
            })
    };

    renderImage(imageUrl) {
        return (
          <div>
            <img src={imageUrl} />
          </div>
        );
      }


    render() {
        return (
            <div className="cards">
                <div className="images">
                    {this.state.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
                </div>
            </div>
        )
    }

}


export default Card_Layout