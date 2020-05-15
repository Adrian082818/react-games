import NewReview from "../components/reviews/NewReview"

export const loadReviews = reviews => ({ type: 'LOAD_REVIEWS', reviews })

export const addReview = review => ({ type: 'ADD_REVIEW', review })

export const fetchPlayerReviews = () => {
    return dispatch => {
        return fetch('http://localhost:3000/controllers/player_reviews')
        .then(response => response.json())
        .then(reviews => {
            if (reviews.error) {
                alert(reviews.error)
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
        return fetch('http://localhost:3000/controllers/player_reviews', {
            method: "POST",
            headers: {
                "content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(NewReview => {
            if (NewReview.error) {
                alert(NewReview.error)
            } else {
                dispatch(NewReview(review))
            }
            return NewReview
        })
    }
}