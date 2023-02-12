import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../../commen/apis/MovieApi'
import { APIKey } from '../../commen/apis/MovieApiKey'


export const fetchAsyncMovies = createAsyncThunk('/movies/fetchAsyncMovies',async(input) => {
 
        const res =  await MovieApi.get(`?apiKey=${APIKey}&s=${input}&type=movie`)
     return res.data
          
})
export const fetchAsyncShows = createAsyncThunk('/movies/fetchAsyncShows',async(input) => {
    
        const res =  await MovieApi.get(`?apiKey=${APIKey}&s=${input}&type=series`)
     return res.data
          
})
export const fetchAsyncMovieOrShowDetail = createAsyncThunk('/movies/fetchAsyncMovieOrShowDetail',async(id) => {
    
        const res =  await MovieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
     return res.data
          
})

const initialState = {
    movies :{},
    shows:{},
    selectedMovieOrShow:{}

}

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        removeSelectedMovieOrShow:(state)=>{
state.selectedMovieOrShow={};
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("Full")
            return{...state,movies:payload}
        }
        ,
        [fetchAsyncMovies.rejected]:()=>{
            console.log("Rejected")
            
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("Full")
            return{...state,shows:payload}
        }
        ,
        [fetchAsyncMovieOrShowDetail.fulfilled]:(state,{payload})=>{
            console.log("Full")
            return{...state,selectedMovieOrShow:payload}
        }
        ,
    }

})

export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;