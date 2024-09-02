import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);  // Pass the search query back to the parent component
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for products, brands and more"
        value={searchQuery}
        onChange={handleInputChange}
        className="border border-gray-300 rounded-full py-1.5 px-4 pl-10 w-72 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 8l4-4m0 0l4 4m-4-4v12"
        />
      </svg>
    </div>
  );
};

export default SearchBar;
