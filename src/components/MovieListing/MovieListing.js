import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { getAllMovies, getAllShows } from '../../features/slice/movieSlice'
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss'
function MovieListing() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 const movies = useSelector(getAllMovies)
 const shows = useSelector(getAllShows)

 let renderMovies = "";
 renderMovies = movies.Response == "True" ?(
  movies.Search.map((movie,index)=>{  
   return <MovieCard key={index} data={movie}/>
  })
 ):(
 
  <div className="movies-error">
    <h3 style={{color:"red"}}>
    Please enter a valid keyword, {movies.Error}
    </h3>
    <span class="loader"></span>;
  </div>
 )
 let renderShows = "";
 renderShows = shows.Response == "True" ?(
  shows.Search.map((shows,index)=>{  
   return <MovieCard key={index} data={shows}/>
  })
 ):(
  <div className="movies-error">
    <h3 style={{color:"red"}}>
    Please enter a valid keyword,{shows.Error}
   
    </h3>
    <span class="loader"></span>;
  </div>
 )

  return (
  
<div className="movie-wrapper">

  <div className="movie-list">
 
  <h2>Movies</h2>

  <div className="movie-container">
  <Slider {...settings}>  {renderMovies}</Slider>
  </div>
</div>
<div className="show-list">
  <h2>Shows</h2>

  <div className="movie-container">
  <Slider {...settings}>{renderShows}</Slider>  
  </div>
</div>


</div>
  )
}

export default MovieListing