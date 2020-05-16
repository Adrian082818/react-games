
export const loadReviews = reviews => ({ type: "LOAD_REVIEWS", reviews })

export const addReview = review => ({ type: "ADD_REVIEW", review })

export const fetchPlayerReviews = () => {
    return dispatch => {
        return fetch("http://localhost:3001/player_reviews")
        .then(response => response.json())
        .then(reviews => {
            if (reviews.error) {
                alert(reviews)
            } else {
                dispatch(loadReviews(reviews))
            }
        })
        .catch(alert)
    }
}

export const createReview = reviewData => {
    return dispatch => {
        const body = {
            player_review: reviewData
        }
        return fetch("http://localhost:3001/player_reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(newReview => {
            if (newReview.error) {
                alert(newReview.error)
            } else {
                dispatch(addReview(newReview))
            }
            return newReview
        })
    }
}