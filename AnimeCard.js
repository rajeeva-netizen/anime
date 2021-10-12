import React, {useState, useEffect} from "react"
import MovieCard from './card'
import axios from 'axios'
const Animecard=()=>{
const [val, setVal] = useState([])
    useEffect(()=>{
        axios.get('https://api.aniapi.com/v1/anime',{
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ1OSIsIm5iZiI6MTYzMzg3MTE0OCwiZXhwIjoxNjM2NDYzMTQ4LCJpYXQiOjE2MzM4NzExNDh9.0zQsDAe2jraDAfEDKJr0wC6nFbeRnFGYfy4RyXZl37I'
        }).then(res=>{
            console.log(res.data.data.documents)
            setVal(res.data.data.documents)
        }).catch(err=>{
            console.log(err)
        })
    }, [])
    console.log(val)
    return(
        <>
    {
        val.length?val.map(movie=>{
            return(
                <MovieCard movie = {movie}/>
            )
           

        }):null
    }
        </>
    )
}
export default Animecard