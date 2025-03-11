import React from 'react';
import { InfiniteSlider } from '../../components';
import sports from '../../../sports.json';

const url = 'https://lotus365.blue/assets/img/banner-5-lotus.webp';

const Dashboard = () => {
  return (
    <>
      {/* Casino Image Slider */}
      <InfiniteSlider images={Array.from({ length: 5 }, () => url)} />

      {/* Sport list */}
      <div className='flex my-5 gap-5 sm:w-[80vw] w-[90vw] scrollbar-hidden overflow-x-auto'>
        {sports.map((sport) => (
          <div className='relative min-w-[110px]'>
            <img
              key={sport.sportId}
              src='https://cdn.mac1j.com/gstatic/gemexchimages/cricket-bg.png'
              alt={sport.sportId}
              width={200}
              class='object-cover h-[50px] w-full rounded-lg'
            />
            <p className='font-bold text-sm text-nowrap text-white absolute left-2 bottom-1'>
              {sport.name}
            </p>
          </div>
        ))}
      </div>

      <div className='w-full scrollbar-hidden overflow-x-auto'>
        <div className='flex gap-2'>
          {Array.from({ length: 8 }, (_, index) => (
            <img key={index} src={url} alt='Sliding' className='w-60 duration-300 object-cover' />
          ))}
        </div>
        <div className='flex mt-2 gap-2'>
          {Array.from({ length: 8 }, (_, index) => (
            <img key={index} src={url} alt='Sliding' className='w-60 duration-300 object-cover' />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
