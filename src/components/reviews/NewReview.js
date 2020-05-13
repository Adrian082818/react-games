import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createReview } from '../actions/reviews.js';
// import StarRating from './StarRating';

class NewReview extends Component {

    state = {
        rating: 0,
        content: ""
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleStarClick = rating => {
        this.setState({ rating })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createReview(this.state)
        .then(response => !response.error && this.resetForm())
    }

    resetForm = () => {
        this.setState({
            rating: 0,
            content: ""
        })
    }

    render() {
        return (
            <div className="NewReview">
                
            </div>
        )
    }
}