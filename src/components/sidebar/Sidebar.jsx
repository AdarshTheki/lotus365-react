import React from 'react';
import sports from '../../../sports.json';
import { NavLink } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Sidebar = () => {
  return (
    <ul className='w-[220px] max-md:hidden bg-white border-r border-gray-300'>
      {sports.map((sport) => (
        <li key={sport.sportId} className='border-b border-b-gray-200'>
          <NavLink
            to={`/match/${sport.name.toLowerCase()}`}
            className='flex p-4 items-center relative gap-5 hover:scale-105 scale-90 duration-300 ease-out'>
            <img src={'https://placehold.co/30x30/png'} alt={sport.name} />
            <span className='text-nowrap text-xs font-semibold'>{sport.name}</span>
            <ChevronRight size={16} className='text-gray-300 absolute right-0 to-45%' />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
