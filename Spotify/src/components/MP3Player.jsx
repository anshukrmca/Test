import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";
import { IoVolumeMediumOutline } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";

const MP3Player = ({ songs }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPauseHandler = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSongHandler = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const prevSongHandler = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    );
  };

  return (
    <div>
      <div className="flex mt-4 flex-col md:items-start bg-gray-600 rounded-lg">
        <div className="bg-white h-1 w-24 rounded-lg shadow-none"></div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
            <SlOptions className="cursor-pointer"/>
        </div>
        <div className="flex justify-center items-center">
          <button onClick={prevSongHandler} className="mx-2">
            <FaStepBackward />
          </button>
          <button onClick={playPauseHandler} className="mx-2">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={nextSongHandler} className="mx-2">
            <FaStepForward />
          </button>
        </div>
        <div>
          <IoVolumeMediumOutline size={20} className="cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default MP3Player;
