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
                <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                    <Poster isPlay={true} src="" title="So Rude Of Me By sweets" Subtitle="Comedy Shows | English, Hindi,telugu | 18yrs+ | 2hr 30mins"/>
                </div>
                <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                    <Poster isPlay={true} src="" title="So Rude Of Me By sweets" Subtitle="Comedy Shows | English, Hindi,telugu | 18yrs+ | 2hr 30mins"/>
                </div>
                <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                    <Poster isPlay={true} src="" title="So Rude Of Me By sweets" Subtitle="Comedy Shows | English, Hindi,telugu | 18yrs+ | 2hr 30mins"/>
                </div>
                <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                    <Poster isPlay={true} src="" title="So Rude Of Me By sweets" Subtitle="Comedy Shows | English, Hindi,telugu | 18yrs+ | 2hr 30mins"/>
                </div>
                <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                    <Poster isPlay={true} src="" title="So Rude Of Me By sweets" Subtitle="Comedy Shows | English, Hindi,telugu | 18yrs+ | 2hr 30mins"/>
                </div>
                <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                    <Poster isPlay={true} src="" title="So Rude Of Me By sweets" Subtitle="Comedy Shows | English, Hindi,telugu | 18yrs+ | 2hr 30mins"/>
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