import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
function App() {
  return (
    <div className="App">
         <Header/>
         <div className="container">
          
         </div>
     <Routes>
 
      <Route path="/movie-detailas-redux-web" element={<Home/>}/>
      <Route path="/movie/:id" element={<MovieDetail/>} />
      <Route element={<PageNotFound/>} />
    
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
