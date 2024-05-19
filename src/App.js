import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import BookList from './components/BookList';
import BookEdit from './components/BookEdit';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/books/' exact={true} component={BookList}/>
            <Route path='/books/:id' component={BookEdit}/>
          </Switch>
        </Router>
    )
  }
}

export default App;
