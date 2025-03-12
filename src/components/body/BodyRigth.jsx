import React, { useState } from 'react';

const Betslip = () => {
  const [isActive, setIsActive] = useState('betslip');

  return (
    <div className="!min-w-[20vw] max-md:hidden mt-4 space-y-4">
      <h2>Betslip</h2>
      <hr className="border-b border-gray-300" />
      <div className="grid grid-cols-2 justify-between items-center gap-5">
        <div className="grid grid-cols-2 text-xs">
          <button
            onClick={() => setIsActive('betslip')}
            className={`w-full text-center py-2 ${
              isActive == 'betslip' ? 'bg-white' : 'bg-gray-400'
            }`}
          >
            Betslip
          </button>
          <button
            onClick={() => setIsActive('Open Bets')}
            className={`w-full text-center py-2 ${
              isActive !== 'betslip' ? 'bg-white' : 'bg-gray-400'
            }`}
          >
            Open Bets
          </button>
        </div>
        <button className="w-full text-center text-xs bg-[var(--primary)] py-2">
          Open Bets
        </button>
      </div>
    </div>
  );
};

export default Betslip;
