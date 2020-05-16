// import React from 'react';
// // import logo from './logo.svg';
// import Navbar from './components/layout/Navbar';
// import Errors from './components/layout/Navbar';
// import Home from './components/layout/Home';
// import NewGame from './components/NewGame.js';
// import GamesContainer from './containers/GamesContainer';
// import ReviewsContainer from './containers/ReviewsContainer';
// import { Switch, Route } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { fetchGames } from './actions/games.js';
// import { fetchPlayerReviews } from './actions/reviews.js';
// import './App.css';

// class App extends React.Component {

//   componentDidMount() {
//     this.props.fetchGames()
//     this.props.fetchPlayerReviews()
//   }

//   render() {

//     return (
//       <div className="App">
//       <Navbar />
//       <Errors />
//       <Switch>
//         <Route path='/' component={Home} />
//         <Route exact path='/games/new' component={NewGame} />
//         <Route path='/games' component={GamesContainer} />
//         <Route path='/reviews' component={ReviewsContainer} />
//       </Switch>
//      </div>
//     );
//  }
// }

// export default connect(null, {fetchGames, fetchPlayerReviews })(App);
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
    // should dispatch an action, something like fetchCars?
    this.props.fetchGames()
    this.props.fetchPlayerReviews()
  }

  // the render method should be a pure function of props and state
  render() {

    return (

      <div className="App">
        <h1><span role="img" aria-label="red car">🚗</span> React Games <span role="img" aria-label="blue car">🚙</span></h1>
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