import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchAsyncMovieOrShowDetail, getAllSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../features/slice/movieSlice'
import './MovieDetail.scss'
function MovieDetail() {

 const  {id} = useParams()
 const dispatch = useDispatch()
 const data = useSelector(getAllSelectedMovieOrShow)
console.log(data)
 useEffect(() => {
  dispatch(fetchAsyncMovieOrShowDetail(id))

  return()=>{
  dispatch(removeSelectedMovieOrShow())
  }
 }, [dispatch])
 
  return (
 <div className="movie-section">
  {
    Object.keys(data).length === 0 ?(
    <span class="loader"></span>) :(  <>

      <div className="section-left">
      <Link to={'/'} style={{color:'grey'}}>Back to home</Link>
        <div className="movie-title">
          {data.Title}
        </div>
        <div className="movie-rating">
    <span>
      IMDB Rating <i className='fa fa-star'></i>:{data.imdbRating}
    </span>
    <span>
      IMDB Votes <i className='fa fa-star'></i>:{data.imdbVotes}
    </span>
    <span>
       Runtime <i className='fa fa-star'></i>:{data.Runtime}
    </span>
    <span>
      Year <i className='fa fa-star'></i>:{data.Year}
    </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
          <div className="movie-info">
            <div>
              <span>
                Director
              </span>
              <span>
               {data.Director}
              </span>
            </div>
            <div>
              <span>
                Stars
              </span>
              <span>
               {data.Actors}
              </span>
            </div>
            <div>
              <span>
                Genres
              </span>
              <span>
               {data.Genre}
              </span>
            </div>
            <div>
              <span>
                Languages
              </span>
              <span>
               {data.Language}
              </span>
            </div>
            <div>
              <span>
                Awards
              </span>
              <span>
               {data.Awards}
              </span>
            </div>
          </div>
        
      </div>
      <div className="section-right">
        <img src={data.Poster}/>
      </div>
      </>)

  }

 </div>
  )
}

export default MovieDetail