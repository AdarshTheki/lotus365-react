import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import sports from '../../constant/sports.json';

const Sidebar = () => {
  return (
    <div className='!min-w-[200px] max-md:hidden bg-white border-r border-gray-300'>
      {sports.map((sport, index) => (
        <div key={sport.sportId} className='border-b border-b-gray-200'>
          <NavLink
            to={`/match/${sport.name.toLowerCase()}`}
            className='flex p-4 items-center relative gap-5 hover:scale-105 scale-90 duration-300 ease-out'>
            <img src={`/asset ${index + 3}.png`} alt={sport.name} width={20} />
            <span className='text-nowrap text-xs font-semibold'>{sport.name}</span>
            <ChevronRight size={16} className='text-gray-300 absolute right-0 to-45%' />
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
