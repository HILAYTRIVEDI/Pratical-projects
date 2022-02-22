import React, { Component } from 'react'
import Navigation from './Navigation';
import axios from 'axios';

export class SinglePost extends Component {
  constructor(props){
    super(props)
    this.state={
        loading : false,
        posts : {},
        error: ""
    }
  }
  componentDidMount(){
    const wordPressSiteUrl = "http://advance-wordpress-with-react.local/";
    console.log(this.props);
    this.setState({
        loading: true
    },()=>{
        axios.get(
            `${wordPressSiteUrl}/wp-json/wp/v2/posts/`
        )
        .then(res=>{
            this.setState({loading:false, posts:res.data})
        })
        .catch(err =>{
            this.setState({ loading:false, error : err.response.data })
        })
    })
  }
  render() {
    return (
      <div>
        <Navigation/>
      </div>
    )
  }
}

export default SinglePost