import React from "react";
import MP3Player from "./MP3Player";

const PlayedSong = () => {
  return (
    <div className="p-4">
      <p className="font-semibold text-lg">Song Name</p>
      <p className="font-light">The artist</p>
      <img
        className="w-72 h-80 mt-3 rounded-md border border-black"
        src="https://cdn2.geckoandfly.com/wp-content/uploads/2017/12/530-album-cover.jpg"
        alt="song"
      />
      <div>
        <MP3Player/>
      </div>
    </div>
  );
};

export default PlayedSong;
