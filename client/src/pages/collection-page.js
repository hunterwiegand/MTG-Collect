import React, { Component } from 'react';
import { Container } from "../components/Grid";
import axios from 'axios';
import Card_Layout from "../components/Card_Layout";

class Collection extends Component {

    state = {
        username: window.sessionStorage.getItem("username")
    }

    render() {
        return(
            <Container>
                <Card_Layout
                    username={this.state.username}>
                </Card_Layout>
            </Container>
        )
    }
}

export default Collection;