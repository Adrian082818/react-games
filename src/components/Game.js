import React from 'react';

const Game = ({ game }) => {
    return (
        game 
        ? <div className="Game">
            <h2>{game.title} {game.genre}</h2>
            <p>Rating: {game.rating}</p>
            <p>Price: ${game.price}</p>
        </div>
        : <h3>...Still Loading...</h3>

    )
}

export default Game;