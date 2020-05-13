import React from 'react';
import Game from '../components/games/Game.js';
import ChooseGame from '../components/games/ChooseGame.js';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

const GamesContainer = ({ games }) => {
    return (
        <div className="GamesContainer">

            <Switch>
                <Route exact path='/games' component={ ChooseGame } />
                <Route exact path='/games/:id' render={(routerProps) => {
                    const game = games.find(game => game.id === parseInt(routerProps.match.params.id))
                    return <Game {...routerProps} game={game} />
                }} />
            </Switch>
        </div>
    )
}

const mapStateToProps = ({ games }) => ({ games })

export default connect(mapStateToProps)(GamesContainer);