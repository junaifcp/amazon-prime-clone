import { useState,useEffect } from 'react';
import {API_KEY,IMAGE_URL} from '../../Components/Constants/Constants'
import './Rows.css';
import axios from '../../axios';
import YouTube from 'react-youtube';
function Rows(props) {
    const [movies,setMovies]=useState([])
    const [urlId,setUrlId]=useState('')
    useEffect(() => {
     axios.get(props.url).then((response)=>{
         console.log(response.data);
         setMovies(response.data.results)
     }).catch(err=>{
        //  alert('network error')
     })
    })
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        }
    }
const handleMovie=(id)=>{
 console.log(id);
 axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    //  console.log(response.data);
    if(response.data.results.length!==0){

        setUrlId(response.data.results)
    }else{
        console.log('Trailer is empty');
    }

 })
}
  return (
      <>
    <div className='bg-dark text-white d-flex h-100'>
        <h3 className='ps-3'>{props.title}</h3><a href="/" className='mt-1 ms-2'><small>See more</small></a>
    </div>
    <div className='posters bg-dark'>
    {
        movies.map((movie)=>
            <img onClick={()=>{handleMovie(movie.id)}} className={props.isSmall ? 'smallPoster' :'poster'} src={`${IMAGE_URL+movie.backdrop_path}`} alt="images-poster" />
        )
    }

    </div>
    {
      urlId&& <YouTube opts={opts} videoId={urlId.key}/>
    
    }
      </>
  
  )
}

export default Rows