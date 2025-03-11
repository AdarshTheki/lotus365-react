import React from 'react';
import { useState, useEffect } from 'react';
import formateDate from '../../constant/formateDate';
import { NavLink } from 'react-router-dom';
import sports from '../../../sports.json';
import { Search, X } from 'lucide-react';

const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className='w-full flex justify-between items-center sm:p-4 p-2 md:min-h-[100px] h-fit text-white bg-green-700'>
        <NavLink to={'/'} className='sm:text-4xl text-2xl font-bold uppercase !text-white'>
          Lotus<span className='text-yellow-500'>360</span>
        </NavLink>
        <p className='text-sm max-md:hidden'>{formateDate(dateTime)}</p>
        {/* Search and login */}
        <div className='flex items-center justify-between gap-5 max-md:hidden'>
          <input className='py-1 px-4 hover:outline text-sm bg-white text-green-700 outline-blue-600 rounded border-gray-600 border' />
          <NavLink to={'/login'} className='font-medium'>
            Login
          </NavLink>
          <NavLink to={'/register'} className='font-medium'>
            Register
          </NavLink>
        </div>
        {searchActive ? (
          <div className='flex items-center justify-around'>
            <input
              type='text'
              placeholder='search... '
              className='py-1 px-4 w-[79%] hover:outline bg-white text-green-700 outline-blue-600 rounded border-gray-600 border'
            />
            <X strokeWidth={3} onClick={() => setSearchActive(false)} />
          </div>
        ) : (
          <div className='flex items-center gap-4 md:hidden'>
            <Search strokeWidth={3} onClick={() => setSearchActive(true)} />
            <NavLink
              to={'/login'}
              className='font-medium text-sm px-4 text-black py-2 bg-yellow-500'>
              Login
            </NavLink>
            <NavLink to={'/register'} className='font-medium text-sm px-4 text-black py-2 bg-white'>
              Register
            </NavLink>
          </div>
        )}
      </div>
      <ul className='p-3 flex gap-5 overflow-y-auto scrollbar-hidden border-b border-gray-300 bg-white'>
        {sports.map((item) => (
          <li key={item.typeId} className='font-semibold uppercase text-sm'>
            <NavLink to={`/match/${item.name.toLowerCase()}`} className='text-nowrap'>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Header;
