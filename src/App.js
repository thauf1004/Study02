import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from 'components/Header';

import Home from 'pages/Home';
import About from 'pages/About';
import Posts from 'pages/Posts';
import Login from 'pages/Login';

class App extends Component {

  state = {
    login: false
  };

  render() {
    const {login} = this.state;
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/post" component={Posts}/>
          <Route path="/login" login={login} component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;
