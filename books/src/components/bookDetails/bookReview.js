import React from 'react';

let BookReview =(props) => {
    return(
        <div className="review-container">
          <div className="stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <div className="reviews">
            <p>(11)</p>
        </div>
          
        </div>
    )
}

export default BookReview;