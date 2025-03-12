import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Check, Plus, Star } from 'lucide-react';
import matchWithSportId from '../constant/matchWithSportId.json';

import sports from '../constant/sports.json';
import { format } from 'date-fns';

const HomePage = () => {
  const { id } = useParams();
  const [isLive, setIsLive] = useState(false);
  const [isVirtual, setIsVirtual] = useState(false);

  const filterData = sports?.find((i) => i?.sportId == id);

  return (
    <div className='mt-10'>
      <div className='flex items-center justify-between'>
        <h2 className='font-semibold text-2xl text-gray-700'>
          {id ? filterData?.name : 'Cricket'}
        </h2>
        <div className='flex items-center gap-2 uppercase text-sm font-semibold'>
          <button
            onClick={() => setIsLive(!isLive)}
            className={`rounded-2xl px-5 py-1 border border-[var(--primary)] flex items-center gap-1 cursor-pointer ${
              !isLive ? 'text-[var(--primary)]' : 'bg-[var(--primary)] text-white'
            }`}>
            {isLive ? <Check size={16} /> : <Plus size={16} />} Live
          </button>
          <button
            onClick={() => setIsVirtual(!isVirtual)}
            className={`rounded-2xl px-5 py-1 border border-[var(--primary)] flex items-center gap-1 cursor-pointer ${
              !isVirtual ? 'text-[var(--primary)]' : 'bg-[var(--primary)] text-white'
            }`}>
            {isVirtual ? <Check size={16} /> : <Plus size={16} />} Virtual
          </button>
        </div>
        <p className='font-semibold text-sm max-md:hidden'>Betting from 1min before start</p>
      </div>
      <hr className='border-b border-gray-300 my-3 w-full' />
      <p>Match</p>
      <MatchListing />
    </div>
  );
};

export default HomePage;

const MatchListing = () => {
  return (
    <div>
      {matchWithSportId.map((item) => (
        <div className='flex '>
          <div className='flex w-3/2 gap-2 items-center'>
            <Star size={16} />
            <span className='font-semibold text-xs w-full line-clamp-1'>{item.name}</span>
            <span style={{ fontSize: 10 }} className='pr-2'>
              {format(new Date(item.matchDateTime), 'dd/MM/yyyy HH:mm')}
            </span>
          </div>
          <div className='grid grid-cols-6 w-full' style={{ fontSize: 10 }}>
            <div className='flex items-center justify-center bg-blue-300 py-4 px-2'>
              <span>1.2</span>
            </div>
            <div className='flex items-center justify-center bg-pink-300 py-4 px-2'>
              <span>1.0</span>
            </div>
            <div className='flex items-center justify-center bg-blue-300 py-4 px-2'>
              <span>1.3</span>
            </div>
            <div className='flex items-center justify-center bg-pink-300 py-4 px-2'>
              <span>1.1</span>
            </div>
            <div className='flex items-center justify-center bg-blue-300 py-4 px-2'>
              <span>1.6</span>
            </div>
            <div className='flex items-center justify-center bg-pink-300 py-4 px-2'>
              <span>1.8</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
