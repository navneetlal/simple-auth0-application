import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

ReactDOM.render(<Router history={history} component={App}>
  <div>
    <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />
    <Route exact path="/home" render={(props) => <Home auth={auth} {...props} />} />
    <Route exact path="/callback" render={(props) => {
      handleAuthentication(props);
      return <Callback {...props} />
    }} />
  </div>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

