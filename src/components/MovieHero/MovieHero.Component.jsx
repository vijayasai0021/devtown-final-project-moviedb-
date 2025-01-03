import React, { useContext } from "react";
import { MovieContext } from "../context/Movie.context";
import MovieInfo from "./Movie.info";


const MovieHero = () => {
  const { movie } = useContext(MovieContext);

  const genres = movie.genres?.map(({ name }) => name).join(" , ");

  // console.log(genres);
  return (
    <>
      <div>
        {/* for mobile screen and tablet screen size */}
        <div className="lg:hidden w-full">
            <img className="m-4 rounded" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="cover poster" style={{width:"calc(100%-2rem)"}}/>
        </div>
        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex flex-col-reverse gap-3 px-4 my-3">
              <div className="text-black flex flex-col gap-3 md:px-4">
                <h4>{movie.vote_average}/10 votes: {movie.vote_count}</h4>
                <h4>origial language:{movie.original_language}</h4>
                <h4>{movie.runtime}min | {genres}</h4>
              </div>
          </div>
          <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
          <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
            Rent 
          </button>
          <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
            Buy 
          </button>
          </div>
        </div>
        {/* large screen size laptop */}
        <div
          className="relative hidden w-full lg:block"
          style={{ height: "28rem" }}
        >
          <div
            className="absolute z-10 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(34,34,34) 24.95%, rgb(34,34,34) 38.2%, rgba(34,34,34,0.03) 97.47%, rgb(34, 34, 34) 100%)",
            }}
          >
            <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
              <div className="w-64 h-96">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt="Movie Poster"
                  className="w-full h-full rounded-lg
                "
                />
              </div>
              <div>
                <MovieInfo movie={movie} />
              </div>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="Backdrop poster"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieHero;