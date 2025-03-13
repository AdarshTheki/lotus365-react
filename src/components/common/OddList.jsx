import { Star, WalletCards } from 'lucide-react';
import React from 'react';

const OddList = () => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-2 capitalize text-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-1">
            <Star />
            <span className="uppercase font-bold">title</span>
          </h2>
          <h3 className="flex gap-1 items-center">
            <WalletCards size={12} />
            <small className="bg-[var(--gold)] text-xs font-bold px-4 py-1 rounded-2xl text-white">
              checkout
            </small>
          </h3>
        </div>
        <div className="flex text-xs font-semibold text-center">
          <small className="w-[63px] h-[43px] flex flex-col items-center justify-center">
            Min: 100
          </small>
          <small className="w-[63px] h-[43px] flex flex-col items-center justify-center">
            Max: 100k
          </small>
          <small className="w-[63px] h-[43px] flex flex-col items-center justify-center">
            Back
          </small>
          <small className="w-[63px] h-[43px] flex flex-col items-center justify-center">
            Lay
          </small>
        </div>
      </div>
      <Odd />
      <Odd />
    </div>
  );
};

export default OddList;

function Odd({ name = 'Adarsh', min = 5.7, max = 120.54, type = 'lay' }) {
  return (
    <div className="sm:flex border text-sm border-gray-300 w-full">
      <h2 className="font-bold w-full p-2 bg-white">{name}</h2>
      <div className={`flex`}>
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className={`w-[63px] h-[43px] flex flex-col items-center justify-center ${index % 2 == 0 ? 'bg-[var(--pink)]' : 'bg-[var(--blue)]'}`}
          >
            <strong>{min}</strong>
            <small>{max}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
