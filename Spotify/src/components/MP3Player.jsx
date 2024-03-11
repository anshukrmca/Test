import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const MP3Player = ({ currentSong }) => {
  // https://www.pagalworld.com.cm/files/download/id/68364
  // audioUrl is not working that i use satatic

  return (
    <div>
      <H5AudioPlayer
        autoPlayAfterSrcChange={false}
        src="https://www.pagalworld.com.cm/files/download/id/68364"
        className="bg-transparent text-white w-auto"
      />
    </div>
  );
};

export default MP3Player;
