import React from 'react';
import BookReview from './bookReview';

import BookContainer from './bookContainer';

let BookDetails = (props) => {
    


    let bookDetails = {
        
        title:props.book.title ? props.book.title :"title" ,
        description:props.book.description ? props.book.description : "lorem ipsom",
        author:props.book.authors ? props.book.authors[0] :"author name",
        image: props.book.imageLinks?  props.book.imageLinks.large : "https://via.placeholder.com/200x150"
    }

    



    
    return(
        <div className=" book-details">
        <div className="container">
            <div className="row align-items-center  fixed">
                <div className="col-ms-12 col-md-6 col-lg-2 ">
                    <div className="details-img">
                        <img src= {bookDetails.image} alt=""/>
                    </div>
                </div>
            
                <div className="col-ms-12 col-md-6 col-lg-2  ">
                    <BookContainer   title={bookDetails.title} author={bookDetails.author} description ={bookDetails.description}/>
                </div>
                <div className="col-ms-12 col-md-6 col-lg-2">
                    <BookReview/>
             </div>
             </div>
            </div>
        </div>

    
    )

}
export default BookDetails;