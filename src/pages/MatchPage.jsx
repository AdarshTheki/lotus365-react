import { ChevronDown, ChevronUp, PlayCircleIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import matchWithSportId from '../constant/matchWithSportId.json';
import { format } from 'date-fns';
import { LoadingSpinner, OddList } from '../components';

const MatchPage = () => {
  const { matchId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const filterMatchData = matchWithSportId.find((i) => i.matchId == matchId);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (isLoading)
    return (
      <div className="w-full">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="w-full sm:p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center cursor-pointer justify-between p-2 bg-[var(--primary)] text-white font-bold text-xl"
      >
        <PlayCircleIcon />
        <span>{filterMatchData.name || "Women's Premier League"}</span>
        {!isOpen ? <ChevronDown /> : <ChevronUp />}
      </button>
      {isOpen && (
        <p className="bg-white text-[var(--primary)] text-sm p-2">
          {format(
            new Date(filterMatchData.matchDateTime),
            'dd/MM/yyyy HH:mm:ss',
          )}
        </p>
      )}

      {/* Match listing live */}
      <OddList />
      <br />
      <br />
      <OddList />
      <br />
      <OddList />
      <OddList />
    </div>
  );
};

export default MatchPage;
