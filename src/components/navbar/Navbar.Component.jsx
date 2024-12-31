import React from 'react'
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import {Link} from 'react-router-dom';
import Searchbar from '../Search/Search.Component.jsx';

function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Hyderabad <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <button>Use App</button>
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <>
      <div className="flex items-center w-full gap-3">
        <div className="w-10 h-10">
          
          <img
            src="/Image_For_Movie_Website.jpg"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
          <BiSearch />
            {/* <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, plays, sports and activities"
            /> */}
            <Searchbar/>
        </div>
      </div>
    </>
  );
}

function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img
              src="/Image_For_Movie_Website.jpg"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3  rounded-md">
            <BiSearch />
            {/* <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, plays, sports and activities"
            /> */}
            <Searchbar/>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Hyderabad <BiChevronDown />
          </span>
          <Link
            to="/plays"
            className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Plays
          </Link>
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
}

const NavbarComponent = () => {
  return (
    <nav className='bg-gray-900 px-4 py-3'>
      {/* for small size visible and large and medium hidden */}
      <div className='md:hidden'>
        {/* <div className="sm:flex md:hidden lg:hidden"> */}
          <NavSm/>
      </div>

      {/* for medium screen size only and hidden in small and large */}

      <div className='sm:hidden md:flex lg:hidden'>
          <NavMd/>
      </div>

      {/* for large screen size only */}

      <div className ='hidden md:hidden lg:flex'>
         <NavLg/>
      </div>

    </nav>

  )
}

export default NavbarComponent;