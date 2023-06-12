import React from 'react';

const Searchbar = () => {
  return (
    <div className=" w-full max-w-[364px] mx-auto">
      <div className="relative border border-primary-border flex items-center w-full h-10 rounded-xl  bg-white overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          className=" h-full w-full outline-none font-light text-sm text-black pr-2"
          type="text"
          id="search"
          placeholder="Search "
        />
      </div>
    </div>
  );
};

export default Searchbar;
