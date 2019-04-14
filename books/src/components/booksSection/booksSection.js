import React from 'react';
import BooksContainer from './booksContainer';

let BooksSection =(props) => {
    return (
        <section className="container">
        <div className="header-container">
          <h1 className="p-2">{props.title + " Books"}</h1>
        </div>
        <BooksContainer book = {props.book}/>

        </section>
    )

    

}
 export default BooksSection;
