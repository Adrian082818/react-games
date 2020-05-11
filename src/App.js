import React from 'react';
// import logo from './logo.svg';
import Navbar from './components/layout/Navbar';
import Errors from './components/layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Errors />
      <Switch>
        <Route path='/' exact component={Games} />
        <Route path='/reviews' exact component={Reviews} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
