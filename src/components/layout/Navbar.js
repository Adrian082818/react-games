import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <h1>
                    Gamer Gear 
                </h1>
                <Link to='/'>
                    Games
                </Link>
                <Link to='/reviews'>
                    Reviews 
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;