import React, { Component } from 'react';
import { createGame } from '../actions/games.js';
import { connect } from 'react-redux';

const initialState = {
    title: "",
    genre: "",
    rating: "",
    price: ""
}

class NewGame extends Component {
    state = initialState

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    resetForm = () => {
        this.setState(initialState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createGame(this.state, this.props.history)
        .then(response => {
            if (!response.error) {
                this.resetForm()
                this.props.history.push("/games")
            }
        })
    }

    render() {
        return (
            <div className="NewGame">
                <h4>New Game</h4>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    name="title"
                    placeholder="title"
                    onChange={this.handleChange}
                    value={this.state.title}
                    /><br/>
                     <input 
                    name="genre"
                    placeholder="genre"
                    onChange={this.handleChange}
                    value={this.state.genre}
                    /><br/>
                     <input 
                    name="rating"
                    placeholder="rating"
                    onChange={this.handleChange}
                    value={this.state.rating}
                    /><br/>
                     <input 
                    name="price"
                    placeholder="price"
                    onChange={this.handleChange}
                    value={this.state.price}
                    /><br/>
                    <input type="submit" value="Add Game"/>
                </form>
            </div>
        )
    }
}

export default connect(null, { createGame })(NewGame);