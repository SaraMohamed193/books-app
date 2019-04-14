import React from 'react'
import Books from './book';

let BooksContainer =(props)=>{



    return (
        <div className="row align-items-center m-2">

        {props.book.map((e,i) => {
            return ( <Books book={e} key={i} />)

})} 
            
            
    
        </div>

    )

}

export default BooksContainer;