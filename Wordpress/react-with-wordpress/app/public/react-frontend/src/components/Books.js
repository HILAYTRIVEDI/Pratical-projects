import React,{Component} from 'react'
import Nav from './Nav'
import axios from "axios"
import BookItems from './BookItems'

class Books extends Component{
  state = {
    books :[],
    isLoaded:false
  }
  componentDidMount(){
    axios.get('/wp-json/wp/v2/books')
    .then(res => this.setState({
      books: res.data,
      isLoaded: true
    }))
    .catch(err => {
      console.log(err);
    })
  }
  render(){
    const {books,isLoaded} = this.state;
    if(isLoaded){
      return(
        <div>
          {
            books.map((data) => {
              console.log(data);
              return(
                <BookItems 
                  key={data.id} 
                  title={data.title.rendered}
                  content = {data.content.rendered}
                />
              )
            })
          }
        </div>
      )
    }
    return <div>Loading...</div>
  }
}

export default Books