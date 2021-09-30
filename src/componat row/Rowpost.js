import React, { useState }  from 'react'
import './Rowpost.css';
import axios from '../axios';
import {API_KEY,imageUrl} from '../constents/Constant';
import { useEffect } from 'react';
function Rowpost(props) {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response=>{
            console.log(response.data)
            setMovies(response.data.results)
        })
    }, [])
    return (
        <div className="row">
            <h2>{props.title} </h2>
            <div className="posters">
                {movies.map((obj)=>
                 <img className={ props.isSmall ? "smallPoster": "poster" } src={`${imageUrl+obj.backdrop_path}`} alt="" />

                )}

            
            </div>
        </div>
    )
}

export default Rowpost
