import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/layouts/Header';
import Home from './components/Home';
import NewMovie from './components/movies/NewMovie';
import EditMovie from './components/movies/EditMovie';
import NewActor from './components/actors/NewActor';
import './assets/css/bootstrap.min.css';
import './App.css';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <Header />
          <Switch className="container">
            <Route path='/' exact component={Home} />
            <Route path='/new-movie' component={NewMovie} />
            <Route path='/new-actor' component={NewActor} />
            <Route path='/edit-movie' component={EditMovie} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
