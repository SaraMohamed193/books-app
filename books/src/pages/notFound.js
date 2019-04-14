import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
let NotFound =(props) => {
    return(
            <div className="fixed">
            <Header/>

                    <div className="not-found">
                    <h1>The Page not found</h1>
                </div>
                <Footer/>
            </div>
        
    )

    
}
export default NotFound;


