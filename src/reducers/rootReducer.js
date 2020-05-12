import { combineReducer } from 'redux';
import games from './games';
import reviews from './reviews';

export default combineReducer({
    games,
    reviews 
})