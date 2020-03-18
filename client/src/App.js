
import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route } from "react-router-dom";
// components
import Signup from './pages/sign-up'
import LoginForm from './pages/login-form'
import Navbar from './components/navbar/index.js'
import Home from './pages/home'
import Collection from "./pages/collection.js"
import AddCards from "./pages/add-cards"
import SearchCards from "./pages/search-cards.js"

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
      // console.log('Get user response: ')
      // console.log(response.data)
      if (response.data.user) {
        // console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        // console.log('Get user: no user');
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
          
          {/* greet user if logged in: */}
          {/* {this.state.loggedIn &&
            <p>Join the party, {this.state.username}!</p>
          } */}
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
              <Collection />}
          />
          <Route
            path="/add-cards"
            render={() =>
              <AddCards />}
          />
          <Route
            path="/search-cards"
            render={() =>
              <SearchCards />}
          />

        </div>
      </Router>
    );
  }
}

export default App;