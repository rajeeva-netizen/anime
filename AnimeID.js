import React, {useEffect, useState} from 'react'
import axios from 'axios'
// import { connect } from "react-redux"
// import {movieDetail,setLoading} from '../../actions/searchActions'

function Movies(props){
  //checking the id and using the useEffect to recieve the movie details of that imdbID
    console.log(props.match.params.ID)
    const [val, setVal] = useState([])
    const [list, setList]=useState([])
    useEffect(()=>{
        let id = props.match.params.ID
        axios.get(`https://api.aniapi.com/v1/anime/${id}`,{
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ1OSIsIm5iZiI6MTYzMzg3MTE0OCwiZXhwIjoxNjM2NDYzMTQ4LCJpYXQiOjE2MzM4NzExNDh9.0zQsDAe2jraDAfEDKJr0wC6nFbeRnFGYfy4RyXZl37I'
        }).then(res=>{
            console.log(res.data)
            setVal(res.data)
            setList(val.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    console.log('image',list.cover_image)
    return(
        <>
       
        <h1 style={{margin:'20px 0px 50px 0px'}}>{list.titles.en}</h1>
        <img style={{margin:'20px 0px 50px 0px'}}src={list.cover_image} className="thumbnail" alt="Poster" />
        {/* <ul className="list-group">
       
              <li className="list-group-item">
                <strong>Genre:</strong> {props.movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Language:</strong> {props.movie.Language}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {props.movie.Released}
              </li>
              <li className="list-group-item">
                <strong>Run Time:</strong> {props.movie.Runtime}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {props.movie.Rated}
              </li>
           
               <li className="list-group-item">
                <strong>IMDB Rating:</strong> {props.movie.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {props.movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {props.movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {props.movie.Actors}
              </li>
            </ul>  */}
            <h1>Heloo</h1>
        </>
    )
}

export default Movies