import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(search);
    console.log(search);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative my-10">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="appearance-none w-full outline-none focus:outline-none active:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="ml-1 outline-none focus:outline-none active:outline-none"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default ImageSearch;
