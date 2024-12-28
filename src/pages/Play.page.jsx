import React from 'react';
//layout 
import DefaultLayoutHOC from '../layouts/Default.Layout';

// components
import Poster from '../components/Poster/Poster.Component';
import PlayFilters from '../components/PlayFilters/PlayFilters.Component';


const Playpage = () => {
  return (
    <>
    <div className='container mx-auto px-4 my-10'>
        <div className='w-full flex flex-col-reverse lg:flex-row-reverse gap-4'> 
            <h2 className='text-2xl font-bold mb-4'>Plays in Hyderabad</h2>
            <div className='flex flex-wrap'>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-11-21-t-7-9-55.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, hindi | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-suhani-shah-kahaani-india-tour-0-2022-8-29-t-12-36-14.jpg"
                title="suhani shah kahaani india tour"
                subtitle="Comedy Shows | English, hindi | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-daddy-kool-by-atul-khatri-0-2022-8-16-t-10-37-17.jpg"
                title="Daddy kool by atul khatri"
                subtitle="Comedy Shows | English, hindi | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sunburn-arena-ft-dj-snake-delhi-ncr-0-2022-8-19-t-11-31-17.jpg"
                title="Sunburn arena ft dj snake delhi"
                subtitle="Comedy Shows | English, hindi | 18yrs+ | 2hr 30mins"
              />
            </div>
            </div>
        </div>

        <div className='lg:w-1/4 p-4 bg-white rounded'>
        <h2 className='text-2xl font-bold mb-4'>Filters</h2>
          <div>
            <PlayFilters title="Date"
              tags={["Today", "Tomorrow", "This Weekend"]}/>
          </div>
          <div>
            <PlayFilters title="languages"
              tags={["Telugu", "Hindi", "English"]}/>
          </div>
        </div>
    </div>
    </>
  )
}

export default DefaultLayoutHOC(Playpage);