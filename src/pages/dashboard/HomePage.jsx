import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import sports from '../../../sports.json';
import { Check, Plus } from 'lucide-react';

const HomePage = () => {
  const { id } = useParams();
  const [isLive, setIsLive] = useState(false);
  const [isVirtual, setIsVirtual] = useState(false);

  const filterData = sports?.find((i) => i.name.toLowerCase() == id?.toLowerCase());

  return (
    <div className='mt-10'>
      <div className='flex items-center justify-between'>
        <h2 className='font-semibold text-2xl text-gray-700'>{id ? filterData.name : 'Cricket'}</h2>
        <div className='flex items-center gap-2 uppercase text-sm font-semibold'>
          <button
            onClick={() => setIsLive(!isLive)}
            className={`rounded-2xl px-5 py-1 border border-green-500 flex items-center gap-1 cursor-pointer ${
              !isLive ? 'text-green-500' : 'bg-green-600 text-white'
            }`}>
            {isLive ? <Check size={16} /> : <Plus size={16} />} Live
          </button>
          <button
            onClick={() => setIsVirtual(!isVirtual)}
            className={`rounded-2xl px-5 py-1 border border-green-500 flex items-center gap-1 cursor-pointer ${
              !isVirtual ? 'text-green-500' : 'bg-green-600 text-white'
            }`}>
            {isVirtual ? <Check size={16} /> : <Plus size={16} />} Virtual
          </button>
        </div>
        <p className='font-semibold text-sm max-md:hidden'>Betting from 1min before start</p>
      </div>
      <hr className='border-b border-gray-300 my-3 w-full' />
      <p>Match</p>
    </div>
  );
};

export default HomePage;
