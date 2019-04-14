import React from 'react';
import {NavLink, Link} from 'react-router-dom'



let Header =(props) => {
    return(
        <header className="header">
        
        <nav className="container navbar navbar-expand-lg navbar-light text-light">
        
         <Link className="navbar-brand" to="/"><i className="fas fa-book-open text-light"></i></Link> 
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-light">
          <li className="nav-item active"><NavLink className="nav-link text-light" to="/books/category/HTML">HTML<span className="sr-only">(current)</span></NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" to="/books/category/CSS">CSS</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" to="/books/category/JavaScript">JavaScript</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" to="/books/category/React">React</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-light" to="/books/category/NodeJs">NodeJs</NavLink></li>
            
          </ul>
          </div>
        </nav>
      </header>
    )

    
}
export default Header;