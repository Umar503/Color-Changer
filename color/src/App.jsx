import { useState } from 'react';

const App = () => {
  const [color, setColor] = useState("green");

  return (
    <>
      <div className='w-full h-screen duration-200 ' style={{ backgroundColor: color }}>
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 justify-center bg-slate-700 p-5 rounded-full  ml-50 ">
          <button
            onClick={() => setColor('black')}
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
          >
            Black
          </button>
          <button
            onClick={() => setColor('yellow')}
            type="button"
            className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor('orange')}
            type="button"
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Orange
          </button>
          <button
            onClick={() => setColor('green')}
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Green
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
