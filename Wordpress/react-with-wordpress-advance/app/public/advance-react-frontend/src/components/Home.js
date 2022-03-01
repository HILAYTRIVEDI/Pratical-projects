import React, { Component } from 'react';
import Navigation from './Navigation';
import axios from "axios";
import { Link } from "react-router-dom";

import Moment from 'react-moment';

export class Home extends Component {
    constructor(props){
        super(props);

        this.state={
            loading : false,
            posts : [] ,
            error: ""
        }
    }

    componentDidMount(){
        const wordPressSiteUrl = "http://advance-wordpress-with-react.local/";
        this.setState({
            loading: true
        },()=>{
            axios.get(
                `${wordPressSiteUrl}/wp-json/wp/v2/posts`
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
        const {posts} = this.state;
        const wordPressSiteUrl = "http://advance-wordpress-with-react.local/";
        return (
            <div>
                <Navigation/>
                {
                    posts.length ? 
                        <div className='mt-5 container'>
                            {
                                posts.map((data, key)=>{
                                    console.log(data);
                                    return(
                                        <div className="card border-dark mb-3" key={data.id} style={{ width:'50rem' }}>
                                            <div className="card-header">
                                                <Link to={`/post/${data.id}`}>
                                                    { data.title.rendered }
                                                </Link>
                                            </div>
                                            <div className='card-body'>
                                                <p className='card-text post-content' dangerouslySetInnerHTML={{__html:data.content.rendered}}></p>
                                            </div>
                                            <div className='card-footer'>
                                                <Moment fromNow>{posts.date}</Moment>
                                                <Link className='btn btn-secondary' to={`/post/${data.id}`}>
                                                    Read More...
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    :
                    ""
                }
            </div>
        )
    }
}

export default Home