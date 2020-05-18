import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import NewGame from './components/NewGame.js'
import Home from './components/Home.js'
import GamesContainer from './containers/GamesContainer.js'
import ReviewsContainer from './containers/ReviewsContainer.js'
import { Switch, Route } from 'react-router-dom'

import { connect } from 'react-redux'
import { fetchGames } from './actions/games.js'
import { fetchPlayerReviews } from './actions/reviews.js'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchGames()
    this.props.fetchPlayerReviews()
  }

  render() {

    return (

      <div className="App">
        <h1><span role="img" aria-label="game controller">🎮</span> React Games <span role="img" aria-label="joy stick">🕹️</span></h1>
        <NavBar />
        <Switch>
          <Route exact path="/games/new" component={NewGame}/>
          <Route path="/games" component={GamesContainer}/>
          <Route exact path="/reviews" component={ReviewsContainer}/>
          <Route path="/" component={Home}/>
        </Switch>

      </div>

    );

  }
}

export default connect(null, { fetchGames, fetchPlayerReviews })(App);