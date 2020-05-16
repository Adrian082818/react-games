import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ games }) => {
    const gameLinks = games.map(game => (
    <Link key={game.id} to={`/games/${game.id}`}>
    {game.title} 
    <br />
    {game.genre} 
    <br />
    {game.rating}
    <br />
    {game.price} 
    </Link>
    ))
    return(
        <div className="SideBar">
            <h4>Games Inventory</h4>
            {gameLinks}
        </div>
    )
}

export default SideBar;