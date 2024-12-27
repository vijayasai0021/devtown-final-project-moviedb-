import './App.css';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
 
 
// react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import pages
import Homepage from './pages/Home.page';
import Moviepage from './pages/Movie.page.jsx';
import Playpage from './pages/Play.page.jsx';

axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] ="5f00e0b1163cbd60a2b383f1eba1e2e4";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/movie/:id" element={<Moviepage />} />
      <Route path="/plays" element={<Playpage />} />
    </Routes>
  );
}

export default App;