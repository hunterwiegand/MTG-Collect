
import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
// components
import Signup from './pages/sign-up'
import LoginForm from './pages/login-form'
import Navbar from './components/navbar/index.js'
import Home from './pages/home'
import Collection from "./pages/collection-page.js"
import Add_Cards from "./pages/add-cards.js"
import Search_Cards from "./pages/search-cards-page.js"

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          {/* Routes to different components */}
          <Route
            exact path="/"
            render = {() =>
              <Home
                loggedIn = {this.state.loggedIn}
                />
            }
            />
          <Route
            path="/login"
            render={() =>
              <LoginForm
                updateUser={this.updateUser}
              />}
          />
          <Route
            path="/signup"
            render={() =>
              <Signup />}
          />
          <Route
            path="/collection"
            render={() =>
              <Collection 
              username={this.state.username}
              />}
          />
          <Route
            path="/add-cards"
            render={() =>
              <Add_Cards />}
          />
          <Route
            path="/search-cards"
            render={() =>
              <Search_Cards />}
          />

        </div>
      </Router>
    );
  }
}

export default App;