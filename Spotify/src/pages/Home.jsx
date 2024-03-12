import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import RecentPlay from "../components/RecentPlay";
import { GET_SONGS } from "../GraphQL/queries";
import { useQuery } from "@apollo/client";

const Home = () => {
  const [SongList, setSongList] = useState([]);
  const [SongType, setSongType] = useState("FOR_YOU");
  const [SearchSong, setSearchSong] = useState("");
  const { loading, error, data } = useQuery(GET_SONGS, {
    variables: {
      search: SearchSong,
      songType: SongType,
    },
  });


  console.log(SearchSong)
  useEffect(() => {
    if (data) {
      setSongList(data.getSongs);
    }
  }, [data]);

  const changeplayList = (songTypeName) => {
    setSongType(songTypeName);
  };
  return (
    <div className="bg-slate-800 text-white min-h-screen">
      <div className="flex p-2">
        <div className="w-1/4 p-4">
          <div className="">
            <Logo />
          </div>
          <ul className="pt-8 space-y-2">
            <li
              onClick={() => changeplayList("FOR_YOU")}
              className="text-sm  cursor-pointer p-2 hover:bg-slate-100/20 rounded-md"
            >
              For you
            </li>
            <li
              onClick={() => changeplayList("TOP_TRACKS")}
              className="text-sm cursor-pointer p-2 hover:bg-slate-100/20 rounded-md"
            >
              Top Track
            </li>
            <li
              onClick={() => changeplayList("FAVOURITES")}
              className="text-sm cursor-pointer p-2 hover:bg-slate-100/20 rounded-md"
            >
              Favorites
            </li>
            <li
              onClick={() => changeplayList("RECENTLY_PLAYED")}
              className="text-sm cursor-pointer p-2 hover:bg-slate-100/20 rounded-md"
            >
              Recently Played
            </li>
          </ul>
        </div>
        <div className="w-3/4">
          <RecentPlay SongList={SongList} SongType={SongType} setSearchSong={setSearchSong} SearchSong={SearchSong} />
        </div>
      </div>
      <div className="size-12 cursor-pointer -mt-10 mx-10 fixed rounded-full border border-black">
        <img className="w-full object-contain " src="https://cdn-icons-png.freepik.com/256/4140/4140048.png" alt="image" />
      </div>
    </div>
  );
};

export default Home;
