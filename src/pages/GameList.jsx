import { NavLink, useParams, useSearchParams } from 'react-router-dom';

const GameList = () => {
  const { id } = useParams();
  const [query, setQuery] = useSearchParams();

  return (
    <div className="w-full">
      {/* lists one */}
      <div className="flex my-2 gap-0.5 p-0.5 bg-[var(--primary)] scrollbar-hidden overflow-x-auto max-w-3xl">
        {Array.from({ length: 20 }, (_, index) => (
          <button
            onClick={() =>
              setQuery({ name: index, gameName: query.get('gameName') })
            }
            className={`px-4 py-2 text-sm bg-gray-100 font-medium cursor-pointer text-nowrap hover:bg-[var(--primary)] hover:text-white ${
              query.get('name') == index && '!bg-[var(--primary)] !text-white'
            }`}
          >
            name - {index}
          </button>
        ))}
      </div>

      <div className="flex my-2 gap-0.5 p-0.5 bg-[var(--primary)] scrollbar-hidden overflow-x-auto max-w-3xl">
        {Array.from({ length: 20 }, (_, index) => (
          <button
            onClick={() =>
              setQuery({ gameName: index, name: query.get('name') })
            }
            className={`px-4 py-2 text-sm bg-gray-100 font-medium cursor-pointer text-nowrap hover:bg-[var(--primary)] hover:text-white ${
              query.get('gameName') == index &&
              '!bg-[var(--primary)] !text-white'
            }`}
          >
            gameName - {index}
          </button>
        ))}
      </div>

      {/* Images lists */}
      <ul className="grid grid-cols-4 gap-1">
        {Array.from({ length: 20 }, (_, index) => (
          <NavLink to={'/'} key={index} className="w-full">
            <img
              src="https://cdn.dreamdelhi.com/mac88/dt_mac88.webp"
              alt={index}
              className="w-full h-[100px] object-cover"
            />
            <button className="bg-[var(--primary)] text-white text-xs font-bold capitalize py-1 w-1/2">
              play now
            </button>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
