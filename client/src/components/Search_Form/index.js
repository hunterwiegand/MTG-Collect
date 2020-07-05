import React, { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import Card_Layout from "../Card_Layout";
import "./styles.css"

class Search_Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            colors: null,
            type_line: null,
            rarity: null,
            pT: null,
            cmc: null,
            cards: [],
            colorParam: {
                "B": false,
                "W": false,
                "R": false,
                "U": false,
                "G": false
            }
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
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        });

        if (event.target.name === "cmc") {
            if (event.target.value !== NaN) {
                this.setState({
                    cmc: parseInt(event.target.value)
                })
            };
        } else if (event.target.name === "colors") {
            console.log("colors")
            let colors = [];
            colors.push(event.target.value.replace(/\s/g, ''))
            this.setState({
                colors: colors
            })
        }
    };

    // Function for when the user submits the form
    handleFormSubmit = event => {
        event.preventDefault();
        // console.log("colors:", this.state.colorParam)
        let colors = this.concatColors(this.state.colorParam);
        if (colors.length === 0) {
            console.log("empty array")
            colors = null;
        };
        this.setState({
            cards: []
        });
        this.findCards({
            name: this.state.name,
            colors: colors,
            type_line: this.state.type_line,
            rarity: this.state.rarity,
            pT: this.state.pT,
            cmc: this.state.cmc
        });
        this.setState({
            name: null,
            colors: null,
            type_line: null,
            rarity: null,
            pT: null,
            cmc: null,
            colorParam: {
                "B": false,
                "W": false,
                "R": false,
                "U": false,
                "G": false
            }
        })
        this.clearForm();
    };

    clearForm = () => {
        document.getElementById("search-cards-form").reset();
    };

    handleAllCards = () => {
        this.clearForm();
        this.setState({
            cards: []
        });
        // Axios post to retrieve user's cards
        axios.post("/collection/get-all-cards")
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

    renderColorPicks() {
        let colors = ["B", "W", "R", "U", "G"];
        return colors.map((color, i) => {
            return (
                <label key={i}>
                    {color}
                    <input
                        type="checkbox"
                        name={color}
                        onChange={this.onColorChange.bind(this)}
                        value={this.state.colorParam[color]}
                    />
                </label>
            );
        });
    };

    onColorChange(e) {
        const val = e.target.checked;
        const name = e.target.name;
        console.log("colorChange: ", name, val)
        let updateColorParams = Object.assign({}, this.state.colorParam, { [name]: val })
        this.setState({
            colorParam: updateColorParams
        });
    };

    concatColors(colors) {
        console.log("colors", colors);
        let concatColors = [];
        /*
        colors = {
            B : false
            W : false
            R : true
            U : false
            G : false
        } 
        */
        //    for (let i in colors) {
        //        console.log("test: ", colors[i])
        //        if (colors[i]) {
        //            console.log()
        //        }
        //    };

        for (let [key, value] of Object.entries(colors)) {
            if (value) {
                concatColors.push(key)
            };
        };
        return concatColors;
    }



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <form id="search-cards-form">
                            <div className="form-group">
                                <div className="parameter">
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
                                </div>
                                <div className="parameter">
                                    <label htmlFor="Query">
                                        <strong>Rarity</strong>
                                        <select className="form-control" value={this.state.rarity} onChange={this.handleInputChange} name="rarity">
                                            <option value={null}>Any</option>
                                            <option value="common">Common</option>
                                            <option value="uncommon">Uncommon</option>
                                            <option value="rare">Rare</option>
                                            <option value="mythic">Mythic</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="parameter">
                                    <label htmlFor="Query">
                                        <strong>Color(s)</strong>
                                        {this.renderColorPicks()}
                                    </label>
                                </div>




                                <div className="parameter">
                                    <label htmlFor="Query">
                                        <strong>Type</strong>
                                        <select className="form-control" value={this.state.type_line} onChange={this.handleInputChange} name="type_line">
                                            <option value={null}>Any</option>
                                            <option value="Land">Land</option>
                                            <option value="Creature">Creature</option>
                                            <option value="Artifact">Artifact</option>
                                            <option value="Enchantment">Enchantment</option>
                                            <option value="Planeswalker">Planeswalker</option>
                                            <option value="Instant">Instant</option>
                                        </select>
                                    </label>
                                </div>





                                <div className="parameter">
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
                            </div>
                            <div className="pull-right">
                                <button
                                    onClick={this.handleFormSubmit}
                                    type="button"
                                    className="btn btn-lg btn-primary float-right"
                                >Search</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-8">
                        {
                            this.state.cards.length ? (
                                <Card_Layout
                                    cards={this.state.cards}
                                ></Card_Layout>
                            ) : (
                                    <span>Search your collection</span>
                                )
                        }
                    </div>



                </div>
                <button
                    onClick={this.handleAllCards}
                    type="button"
                    className="btn btn-lg btn-primary float-right"
                >
                    Search All Cards
        </button>


            </div>
        )
    }
}

export default Search_Form;