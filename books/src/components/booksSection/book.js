import React from 'react'
import {Link} from 'react-router-dom';

let Books = (props) =>{
    

let bookInfo ={
    id: props.book.id,
    author: props.book.volumeInfo.authors ? props.book.volumeInfo.authors[0] :"unKnwon",
    image: props.book.volumeInfo.imageLinks ?  props.book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/200x150",
    title: props.book.volumeInfo.title
}
    


    return (
        
        <div className="col-ms-12 col-md-6 col-lg-3 p-3">
             
                <div className="book" >
                    <img src={bookInfo.image} className="card-img-top " style={{height:200}} alt={bookInfo.title}/>
                    <div className="card-body ">
                        <h5 className="card-title">{bookInfo.title}</h5>
                        <p className="card-text">by <em>{bookInfo.author}</em></p>
                        <div className="d-flex align-self-start;">
                        <Link to = {"/book/" + bookInfo.id} className="btn button ">Read more</Link>
                        </div>
                        
                         
                        

                    </div>
                </div>
        
         </div>
                                                                                      
            
        
            
    )
}

export default Books;