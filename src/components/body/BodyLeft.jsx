import React, { useEffect, useState } from 'react';
import { ArrowLeftCircle, ChevronRight } from 'lucide-react';

import sports from '../../constant/sports.json';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import matchData from '../../constant/matchWithSportId.json';

const Sidebar = () => {
  const [sportId, setSportId] = useState(null);
  const [matchList, setMatchList] = useState(matchData);

  // useEffect(() => {
  //   const getMatches = async () => {
  //     try {
  //       const res = await axios.get(
  //         `http://localhost:3010/api/get-match-list?sportId=${sportId}`,
  //       );
  //       setMatchList(res.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getMatches();
  // }, [sportId]);

  return (
    <div className="!min-w-[200px] max-w-[220px] max-md:hidden bg-white border-r border-gray-300 overflow-hidden">
      {sportId && (
        <button
          onClick={() => setSportId(null)}
          className="border-b text-left text-gray-600 w-full flex items-center p-2 hover:bg-gray-200 duration-200 border-b-gray-200 cursor-pointer"
        >
          <ArrowLeftCircle className="mr-4" />
          <span className="text-xs font-bold line-clamp-2">Previous</span>
        </button>
      )}

      {!sportId &&
        sports.map((sport, index) => (
          <div
            onClick={() => setSportId(sport.sportId)}
            key={sport.sportId}
            className="border-b border-b-gray-200"
          >
            <div className="flex p-4 items-center relative gap-5 hover:scale-105 scale-90 duration-300 ease-out">
              <img
                src={`/asset ${index + 3}.png`}
                alt={sport.name}
                width={20}
              />
              <span className="text-nowrap text-sm font-semibold">
                {sport.name}
              </span>
              <ChevronRight size={16} className="absolute right-0 to-45%" />
            </div>
          </div>
        ))}

      {sportId &&
        matchList?.map((item) => (
          <NavLink
            to={`/match/${item.sportId}/${item.matchId}`}
            key={item.sportId}
            className="border-b text-left w-full flex items-center p-2 justify-between hover:bg-gray-200 duration-200 border-b-gray-200 cursor-pointer"
          >
            <span className="text-xs line-clamp-2">{item.name}</span>
            {/* <ChevronRight size={18} className="text-gray-600 min-w-fit" /> */}
          </NavLink>
        ))}
    </div>
  );
};

export default Sidebar;
