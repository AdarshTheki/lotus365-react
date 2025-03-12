import React from 'react';

const Betslip = () => {
  return (
    <div className='!min-w-[20vw] max-md:hidden mt-4 space-y-4'>
      <h2>Betslip</h2>
      <hr className='border-b border-gray-300' />
      <div className='grid grid-cols-2 justify-between items-center'>
        <div className='grid grid-cols-2 text-xs'>
          <button className='w-full text-center border py-2'>Betslip</button>
          <button className='w-full text-center border py-2'>Open Bets</button>
        </div>
        <button className='w-full text-center text-xs border py-2'>Open Bets</button>
      </div>
    </div>
  );
};

export default Betslip;
