import React, { useState } from 'react'
import Navigation from './Navigation';
import axios from 'axios';
import { useParams } from 'react-router';

function SinglePost() {
  const params = useParams();

  const [first, setfirst] = useState({
    loading : false,
    posts : [] ,
    error: ""
  });

  const fetchMyData = async () =>{
    const
  }

  return (
    <div>
      <Navigation/>
    </div>
  )
}

export default SinglePost
