import React from 'react';
// import logo from './logo.svg';
import Navbar from './components/layout/Navbar';
import Errors from './components/layout/Navbar';
import Home from './components/layout/Home';
import GamesContainer from './containers/GamesContainer';
import ReviewsContainer from './containers/ReviewsContainer';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Errors />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/games' component={GamesContainer} />
        <Route path='/reviews' exact component={ReviewsContainer} />
      </Switch>
    </div>
  );
}

export default App;
