import React from "react";
import MovieNavbar from "../components/navbar/MovieNavbar.Component";
import MovieProvider from "../components/context/Movie.context";
import Footer from '../components/Footer.jsx';

const MovieLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return <div>
        
        <MovieProvider>
          <MovieNavbar />
        <Component {...props} />
        </MovieProvider>
        <div><Footer/></div>
    </div>;
  };

export default MovieLayoutHoc;