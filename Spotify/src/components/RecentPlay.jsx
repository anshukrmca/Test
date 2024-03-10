import React from "react";
import SearchBar from "./SearchBar";
import Song from "./Song";
import './style.css'

const RecentPlay = () => {
  return (
    <div>
      <p className="font-bold">Recently Played</p>
      <div className="mt-4">
        <SearchBar />
      </div>
      <div className="mt-4 SonglistBox">
        {[1, 1, 1, 1, 1,1,1,1,1,1,1,1].map((item,i) => {
          return <Song key={i}/>;
        })}
      </div>
    </div>
  );
};

export default RecentPlay;
