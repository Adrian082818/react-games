import React from 'react';

const Review = ({ review }) => {
    const buildReview = () => {
        switch (review.rating) {
            case 1:
                return <span role="img" aria-label="One stars">*</span>
            case 2:
                return <span role="img" aria-label="Two stars">**</span>
            case 3:
                return <span role="img" aria-label="Three stars">***</span>
            case 4:
                return <span role="img" aria-label="Four stars">****</span>
             default:
                return <span role="img" aria-label="Five stars">*****</span>

        }
    }
    return (
        <div className="Review">
            {
                review
                ? <>{buildReview()}<p>{review.content}</p></>
                : <h3>Loading Reviews...</h3>
            }
        </div>
    )
}

export default Review;