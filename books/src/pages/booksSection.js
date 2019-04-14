import React, {Component} from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import BooksSection from '../components/booksSection/booksSection';
import axios from 'axios'
import Loading from '../components/loading';


class BooksSectionPage extends Component{
    constructor(props){
        super(props);
        this.state={
            book:[],
            isLoading:false
            
        }
    }
    componentDidUpdate(previousProps){
        if(previousProps.categoryName !== this.props.categoryName){
            axios.get("https://www.googleapis.com/books/v1/volumes?q=" +  this.props.categoryName  + "&key=AIzaSyDcRVPd4WrFCR5HwKh6S3E_NW54wk07qjs")
        .then((response)=>{
            

            this.setState({
                load:true,
                book: response.data.items,
                
            })
            }
        )

        }
    }


    componentDidMount(){
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" +  this.props.categoryName  + "&key=AIzaSyDcRVPd4WrFCR5HwKh6S3E_NW54wk07qjs")
        .then((response)=>{
            
            
            this.setState({
                load:true,
                book: response.data.items,
                

            })
            }
        )
    }

        
    
    render(){
        return(



                <div>
                    <Header/>
                     {!this.state.load ? 
                     
                     <div className="d-flex justify-content-center books-container fixed">
                     <div className="spinner-border" role="status">
                       <span className="sr-only">Loading...</span>
                     </div>
                   </div> :
                        <BooksSection  title = {this.props.categoryName} book ={this.state.book} />
                     }
                   <Footer/>
                </div>
        )
    }
}

       
    BooksSectionPage.defaultProps = {
        categoryName:"HTML"
    }

    


export default BooksSectionPage;