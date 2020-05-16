import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const activeStyle = {"backgroundColor": "Lightcyan", "fontWeight": "bold"}
    return (
            <div className="NavBar">
                <NavLink exact activeStyle={activeStyle} to="/home"> Home </NavLink>
                <NavLink exact activeStyle={activeStyle} to="/games"> Games </NavLink>
                <NavLink exact activeStyle={activeStyle} to="/games/new"> New Game </NavLink>
                <NavLink exact activeStyle={activeStyle} to="/reviews"> Reviews </NavLink>
            </div>
    )
}

export default NavBar;