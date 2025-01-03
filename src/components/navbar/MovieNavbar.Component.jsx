import React, { useContext } from "react";
import { BiChevronDown, BiMenu, BiSearch, BiShareAlt } from "react-icons/bi";
import { MovieContext } from "../context/Movie.context";
import Searchbar from '../Search/Search.Component.jsx';

const NavSm = () => {
  const { movie } = useContext(MovieContext);
  return (
    <>
      <div className="text-gray-700 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">{movie.original_title}</h3>
        </div>
      </div>
      <div className="w-8 h-8">
        <BiShareAlt className="w-full h-full" />
      </div>
    </>
  );
};

const NavLg = () => {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img src="/Image_For_Movie_Website.jpg" alt="logo" className="w-full h-full" />
          </div>
          <div className="w-full flex items-center gap-3   rounded-md">
            {/* <BiSearch /> */}
            {/* <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, plays, sports and activities"
            /> */}
            {/* <Searchbar/> */}
            <h1 className=" text-2xl  font-extrabold text-white font-serif">Movie Page</h1>
            <h3 className="  text-white font-serif">(Movie Details will be shown here and You can rent or buy movies)</h3>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Hyderabad <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign In
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className="bg-white border-b-2 lg:border-b-0 lg:bg-darkBackground-700 p-4">
        {/* Small Screen Size */}
        <div className="md:hidden">
          <NavSm />
        </div>
        {/* Only on Large Screen Size */}
        <div className="hidden w-full lg:flex">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;