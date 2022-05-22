import React, { useEffect } from 'react'
import { useState } from "react"
// import Bloglist from './Component/Bloglist'
import './App.css';
import Participants from './Component/Participants';

const App = () => {
  // const [blogs , setBlogs ] = useState(null);
  // const [isPending , setIsPending ] = useState('Loading...')
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   setTimeout(() => {
  //       fetch('http://localhost:8000/blogs')
  //      .then(res => {
  //        if(!res.ok){
  //          throw Error('could not access the resource')
  //        }
  //        return res.json()
  //      })
  //      .then(data => {
  //        setBlogs(data);
  //        setError(null)
  //      })
  //      .catch(err => {
  //        setError(err.message)
  //      })
  //   }, 1000);
  // },[])

  return (
    <>
    <Participants />
       
    </>
  )
}

export default App
