import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import { Link } from 'react-router-dom';

export class BookItems extends Component {

  state = {
    imageUrl: "",
    author:"",
    isLoaded: false
  }

  componentDidMount(){
    const {featuredMedia,author} = this.props
    const getIMageURL = axios.get(`/wp-json/wp/v2/media/${featuredMedia}`);
    const getAuthor = axios.get(`/wp-json/wp/v2/users/${author}`);

    Promise.all([getIMageURL,getAuthor])
    .then( res => {
      this.setState({
        imageUrl : res[0].data.media_details.sizes.full.source_url,
        author : res[1].data.name,
        isLoaded : true
      })
    } )
    .catch( res => {} )
  }
  render() {
    const {title,content,id} = this.props;
    const { author, imageUrl, isLoaded} = this.state;
    const propTypes = {
      book : PropTypes.object.isRequired
    }

    if(isLoaded) {
      return (
        <Fragment>
            <h2>{title}</h2>
            <small>Review by <strong>{author}</strong></small>
            <img src={imageUrl} style={{width:"100px"}} alt="Post"/>
            <p dangerouslySetInnerHTML={{__html:content}}></p>
            <hr/>
        </Fragment>
      )
    } else {
      return <h1>Loading...</h1>
    }
  }
}

export default BookItems