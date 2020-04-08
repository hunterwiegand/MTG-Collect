import React, { Component } from 'react';
import { Container } from "../components/Grid";
import axios from 'axios';
import Card_Layout from "../components/Card_Layout";
import Search_Form from "../components/Search_Form";

class Collection extends Component {

    state = {
        username: window.sessionStorage.getItem("username")
    }

    render() {
        return(
            <Container>
                <Search_Form></Search_Form>
            </Container>
        )
    }
}

export default Collection;