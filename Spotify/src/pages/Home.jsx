import React from "react";
import Logo from "../components/Logo";
import RecentPlay from "../components/RecentPlay";
import PlayedSong from "../components/PlayedSong";
import  {GET_SONGS} from '../queries'
import { useQuery } from "@apollo/client";

const Home = () => {
  const { loading, error, data } = useQuery(GET_SONGS);
  console.log(data)
  return (
    <div className="bg-slate-800 text-white h-[100%] w-screen ">
      <div className="p-4">
        <Logo />
      </div>
      <div className="flex p-2">
        <div className="w-1/4 p-4">
          <ul className="pt-8 space-y-2">
            <li className="text-sm  cursor-pointer p-2 hover:bg-slate-100/20 rounded-md">
              For you
            </li>
            <li className="text-sm cursor-pointer p-2 hover:bg-slate-100/20 rounded-md">
              Top Track
            </li>
            <li className="text-sm cursor-pointer p-2 hover:bg-slate-100/20 rounded-md">
              Favorites
            </li>
            <li className="text-sm cursor-pointer p-2 hover:bg-slate-100/20 rounded-md">
              Recently Played
            </li>
          </ul>
        </div>
        <div className="flex">
          <div className="p-4 hidden md:block">
            <RecentPlay />
          </div>
          <div className="p-4 justify-center flex">
            <PlayedSong />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
