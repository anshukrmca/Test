import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Song from "./Song";
import "./style.css";
import PlayedSong from "./PlayedSong";
import { useMutation } from "@apollo/client";
import { UPDATE_RECENTLY_PLAYED } from "../GraphQL/queries";

const RecentPlay = ({ SongList, SongType,setSearchSong,SearchSong }) => {
  const [updateRecentlyPlayed] = useMutation(UPDATE_RECENTLY_PLAYED);

  const updateRecentSong = async (item) => {
    try {
      setCurrentsong(item);
      await updateRecentlyPlayed({ variables: { songId: item.id } });
    } catch (error) {
      console.error(error.message);
    }
  };

  const PlayList = () => {
    return (
      <div>
        <p className="font-bold uppercase">{SongType} Songs</p>
        <div className="mt-4">
          <SearchBar setSearchSong={setSearchSong} SearchSong={SearchSong}/>
        </div>
        <div className="mt-4 SonglistBox">
          {SongList.length !== 0
            ? SongList?.map((item, i) => {
                return (
                  <div key={i} onClick={() => updateRecentSong(item)}>
                    <Song item={item} />
                  </div>
                );
              })
            : "No Songs"}
        </div>
      </div>
    );
  };

  const [currentSong, setCurrentsong] = useState(null);
  return (
    <div className="md:flex gap-4 pt-3">
      <div className="hidden md:block">
      <PlayList />
      </div>
      <div className="p-4 md:w-1/2">
      {currentSong && <PlayedSong currentSong={currentSong} />}
      </div>
      <div className="md:hidden block">
      <PlayList />
      </div>
    </div>
  );
};

export default RecentPlay;
