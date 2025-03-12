import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Dot, Search, X } from 'lucide-react';
import { format } from 'date-fns';

import sports from '../../constant/sports.json';

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
      <div className="w-full flex justify-between items-center sm:p-4 p-2 md:min-h-[100px] h-fit text-white bg-[var(--primary)]">
        <NavLink
          to={'/'}
          className="sm:text-4xl text-2xl font-bold uppercase !text-white"
        >
          Lotus<span className="text-yellow-500">360</span>
        </NavLink>
        <p className="text-sm max-md:hidden flex gap-2 items-center">
          {format(dateTime, 'MMM dd, yyyy')}
          <strong className="text-lg">{format(dateTime, 'HH:mm:ss')}</strong>
          {format(dateTime, 'xxx')}
        </p>
        {/* Search and login */}
        <div className="flex items-center justify-between gap-5 max-md:hidden">
          <input
            placeholder="search event"
            className="py-2 px-5 hover:outline bg-white text-[var(--primary)] font-medium outline-blue-600 rounded border-gray-600 border"
          />
          <NavLink to={'/login'} className="font-medium hover:underline">
            Login
          </NavLink>
          <NavLink to={'/register'} className="font-medium hover:underline">
            Register
          </NavLink>
        </div>
        {searchActive ? (
          <div className="flex items-center justify-around">
            <input
              type="text"
              placeholder="search... "
              className="py-1 px-4 w-[79%] hover:outline bg-white text-[var(--primary)] outline-blue-600 rounded border-gray-600 border"
            />
            <X strokeWidth={3} onClick={() => setSearchActive(false)} />
          </div>
        ) : (
          <div className="flex text-xs font-bold text-gray-800 items-center gap-4 md:hidden">
            <Search
              strokeWidth={3}
              onClick={() => setSearchActive(true)}
              className="text-white"
            />
            <NavLink to={'/login'} className="px-4 py-2 bg-yellow-500">
              Login
            </NavLink>
            <NavLink to={'/register'} className="px-4 py-2 bg-white">
              Register
            </NavLink>
          </div>
        )}
      </div>
      <div className="overflow-y-auto scrollbar-hidden border-b text-gray-800 border-gray-300 bg-white">
        <ul className="m-3 flex gap-3">
          {sports.map((item, index) => (
            <li key={item.typeId} className="flex items-center">
              {!index ? null : <Dot />}
              <NavLink
                to={`/match/${item.sportId}`}
                className="font-semibold uppercase text-nowrap text-sm"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
