import React, { Component } from 'react';
import Review from '../components/reviews/Review.js';
import NewReview from '../components/reviews/NewReview.js';

import { loadReviews, addReview } from '../action/reviews.js';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {
    state = {
        reviewId: 0
    }

    setReview = () => {
        this.setState({
            reviewId: (Math.floor(Math.random() * this.props.playerReviews.length))
        })
    }

    render() {
        return (
            <div className="ReviewsContainer">
                <button onClick={this.setReview}>
                    Clicking this will show random review.
                </button>
                {this.state.reviewId ? <Review review={this.props.playerReviews.find(review => review.id === this.state.reviewId)} /> : ""}
                <NewReview />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        playerReviews: state.reviews
    }
}

export default connect(mapStateToProps, {loadReviews, addReview})(ReviewsContainer);