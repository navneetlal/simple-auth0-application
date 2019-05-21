// src/App.js

import React, { Component } from 'react';
import { Button, AppBar, Toolbar } from '@material-ui/core'
import './App.css';

export default class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    console.log('Hello World')

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <a href="#">Auth0 - React</a>
          </Toolbar>
        </AppBar>
        <Button
          bsStyle="primary"
          className="btn-margin"
          onClick={this.goTo.bind(this, 'home')}
        >
          Home
            </Button>
        {
          !isAuthenticated() && (
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.login.bind(this)}
            >
              Log In
                  </Button>
          )
        }
        {
          isAuthenticated() && (
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.logout.bind(this)}
            >
              Log Out
                  </Button>
          )
        }

      </div>
    );
  }
}

// export default App;