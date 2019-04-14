import React  from 'react';

let BookContainer =(props) => {
    return(
      
        <div className="review-container d-flex flex-column m-3  justify-content-start">
           <div className="book-name">
              <h1>{props.title}</h1>
            </div>
            <div className="author-name">
              <h4>by<em>{props.author}</em></h4>
            </div>
            <div className="details">
              <p>{props.description}</p>
            </div>
        </div>
    )
}

export default BookContainer;
