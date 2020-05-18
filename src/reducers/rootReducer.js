import { combineReducers } from 'redux';
import games from './games';
import reviews from './reviews';

export default combineReducers({
    games,
    reviews 
})