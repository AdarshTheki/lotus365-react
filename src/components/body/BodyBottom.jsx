import React from 'react';
import { NavLink } from 'react-router-dom';

const BodyBottom = () => {
  return (
    <div>
      <Games
        title='Popular Games'
        games={Array.from({ length: 6 }, () => ({ url: '', name: '', id: 44 }))}
      />
      <Games
        title='Popular Games'
        games={Array.from({ length: 6 }, () => ({ url: '', name: '', id: 44 }))}
      />
    </div>
  );
};

export default BodyBottom;

const Games = ({
  title = '',
  games = [{ url: '', name: '', id: 44 }],
  listItemClass = '',
  listClass = '',
}) => {
  return (
    <div className='w-full'>
      <h2 className='bg-orange-600 mb-1 mt-3 text-white p-2 font-bold capitalize'>{title}</h2>
      <div className={`flex gap-1 flex-wrap justify-between ${listClass}`}>
        {games.map((item, index) => (
          <div className={`max-w-[110px] w-full ${listItemClass}`}>
            <NavLink to={'/'}>
              <img
                src={`/asset ${item.id + index}.webp`}
                alt={index}
                className='w-full object-contain'
              />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
