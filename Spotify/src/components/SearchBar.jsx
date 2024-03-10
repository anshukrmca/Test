import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex justify-between items-center p-1 gap-4 bg-slate-100/20 rounded-md">
      <input
        type="text"
        placeholder="Search for a song..."
        className="p-1 bg-transparent w-full outline-none "
        value={searchTerm}
        onChange={handleSearch}
      />
      <IoIosSearch size={25} />
    </div>
  );
};

export default SearchBar;
