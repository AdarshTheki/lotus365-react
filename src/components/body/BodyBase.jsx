import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  const images = Array.from(
    { length: 5 },
    () => 'https://lotus365.blue/assets/img/banner-5-lotus.webp',
  );

  const sportsButton = [
    {
      url: 'https://cdn.mac1j.com/gstatic/gemexchimages/cricket-bg.png',
      name: 'cricket',
    },
    {
      url: 'https://cdn.mac1j.com/gstatic/gemexchimages/football-bg.png',
      name: 'football',
    },
    {
      url: 'https://cdn.mac1j.com/gstatic/gemexchimages/tennis-bg.png',
      name: 'tennis',
    },
    {
      url: 'https://cdn.mac1j.com/gstatic/gemexchimages/horse-bg.png',
      name: 'horse',
    },
    {
      url: 'https://cdn.mac1j.com/gstatic/gemexchimages/greyhound-bg.png',
      name: 'greyhound',
    },
  ];

  const playGames = [
    {
      src: 'https://tezcdn.io/casino/casino-highlight/aviator-730-280.gif',
    },
    { src: 'https://tezcdn.io/casino/casino-highlight/fungames-730_280.gif' },
    { src: 'https://tezcdn.io/casino/casino-highlight/evoplay-730-280.gif' },
    { src: 'https://tezcdn.io/casino/casino-highlight/wingogames-730-280.gif' },
  ];

  return (
    <div className="space-y-5 w-full">
      <TopBanner images={[...images, ...images]} />
      <SportsButton sportsButton={sportsButton} />
      <PlayGames playGames={playGames} />
    </div>
  );
};

export default Dashboard;

const TopBanner = (props) => {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex whitespace-nowrap animate-infinite-scroll">
        {[...props.images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Sliding"
            className="w-72 hover:scale-95 mx-2 duration-300 h-40 rounded-lg hover:shadow-lg object-cover"
          />
        ))}
      </div>
    </div>
  );
};

const PlayGames = (props) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {props.playGames.map((item, index) => (
        <NavLink to={'/'} key={index}>
          <img src={item.src} alt={index} />
        </NavLink>
      ))}
    </div>
  );
};

const SportsButton = (props) => {
  return (
    <div className="flex gap-4 overflow-hidden overflow-x-auto">
      {props.sportsButton.map((i, index) => (
        <NavLink to={'/'} key={index} className="relative">
          <img
            src={i.url}
            alt={index}
            className="w-[150px] h-[40px] object-cover rounded-lg"
          />
          <p className="top-3 absolute left-2 capitalize text-white font-semibold">
            {i.name}
          </p>
        </NavLink>
      ))}
    </div>
  );
};
