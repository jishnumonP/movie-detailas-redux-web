import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieApi from "../../commen/apis/MovieApi";
import { APIKey } from "../../commen/apis/MovieApiKey";
import {
  addMovies,
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/slice/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

function Home() {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}

export default Home;
