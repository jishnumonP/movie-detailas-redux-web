import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/slice/movieSlice";
import "./Header.scss";
function Header() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
if(input==="") return alert("Please enter a search key")
      dispatch(fetchAsyncMovies(input));
      dispatch(fetchAsyncShows(input));
      setInput("")
   
  };

  // const Loader = () => {
  //   <span class="loader"></span>;
  // };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/"> Movie App</Link>
      </div>

      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search your Harry,friends shows here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button type="submit" value="Submit">
            Search
          </button>
        </form>
      </div>

      <div className="user-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1RoCHo3A2qBC_3gzPFd2IoTbfwaSoi77KQg&usqp=CAU" />
      </div>
    </div>
  );
}

export default Header;
