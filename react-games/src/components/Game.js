import React from 'react';

const Game = ({ game }) => {
    return (
        game 
        ? <div className="Game">
            <h2>Title: {game.title}</h2>
            <h3>Genre: {game.genre}</h3>
            <h3>Rating: {game.rating}</h3>
            <h3>Price: ${game.price}</h3>
        </div>
        : <h3>...Still Loading...</h3>

    )
}

export default Game;