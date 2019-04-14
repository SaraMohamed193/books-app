import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import BooksSectionPage from './pages/booksSection';
import NotFound from './pages/notFound';
import BookDetailsPage from './pages/bookDetails';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path ="/" exact component={BooksSectionPage}/>
            <Route path ="/book/:bookId"  render = {(props)=>{
            
              let {bookId}=props.match.params
              return (<BookDetailsPage bookId={bookId} />)
              
            }}/>


            <Route path ="/books/category/:categoryName" exact render = {(props) => {
               let {categoryName} = props.match.params
              return( <BooksSectionPage categoryName={categoryName}/>)
            }}/>
            
            <Route component={NotFound}/>
            

          </Switch>
        </BrowserRouter>
        
      
        
      </div>

    );
  }
}

export default App;