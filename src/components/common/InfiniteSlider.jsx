import React from 'react';
import { NavLink } from 'react-router-dom';

const urls = [
  'https://source.unsplash.com/random/400x300?nature',
  'https://source.unsplash.com/random/400x300?water',
  'https://source.unsplash.com/random/400x300?mountains',
  'https://source.unsplash.com/random/400x300?forest',
  'https://source.unsplash.com/random/400x300?beach',
];

const InfiniteSlider = ({ images = urls }) => {
  return (
    <div className='relative overflow-hidden w-full'>
      <div className='flex w-full'>
        {/* Infinite Sliding Wrapper */}
        <NavLink to={'/'} className='flex whitespace-nowrap animate-infinite-scroll'>
          {/* Duplicate images for seamless loop */}
          {[...images, ...images].map((img, index) => (
            <img
              key={index}
              src={img}
              alt='Sliding'
              className='w-60 hover:scale-95 mx-2 duration-300 h-40 rounded-lg hover:shadow-lg object-cover'
            />
          ))}
        </NavLink>
      </div>
    </div>
  );
};

export default InfiniteSlider;
