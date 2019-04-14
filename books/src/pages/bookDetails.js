import React, {Component} from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import BookDetails from '../components/bookDetails/bookDetails';

import axios from 'axios'


class BookDetailsPage extends Component{
  constructor(props){
    super(props);
    this.state={
        book:{},
        isLoading:true
        
    }
}



componentDidMount(){
    axios.get("https://www.googleapis.com/books/v1/volumes/" + this.props.bookId ) 
    .then((response)=>{

        console.log(response)

        this.setState({
            book: response.data,
            load:false

        })
        
        }
    )
}

    

render(){
  return(
    <div>
          <Header/>
            <BookDetails  book = {this.state.book}/>

         <Footer/>
  </div>

)}}




   
export default BookDetailsPage;