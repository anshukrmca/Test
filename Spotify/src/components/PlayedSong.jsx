import React from "react";
import MP3Player from "./MP3Player";

const PlayedSong = ({currentSong}) => {
  return (
    <div className="p-2">
      <p className="font-semibold text-lg">{currentSong?.title}</p>
      <p className="font-light">{currentSong?.artist}</p>
      <img
        className="md:h-80 mt-3 mx-auto rounded-md border border-black"
        src="https://cdn2.geckoandfly.com/wp-content/uploads/2017/12/530-album-cover.jpg"
        alt="song"
      />
      <div>
        <MP3Player currentSong={currentSong}/>
      </div>
    </div>
  );
};

export default PlayedSong;
