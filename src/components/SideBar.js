import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ games }) => {
    const gameLinks = games.map( game => (
    <Link key={game.id} to={`/games/${game.id}`}>{game.title} {game.genre} {game.rating} {game.price}</Link>
    ))
    return(
        <div className="SideBar">
            <h4>Games Inventory</h4>
            {gameLinks}
        </div>
    )
}

export default SideBar;