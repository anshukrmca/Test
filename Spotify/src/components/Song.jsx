import React from "react";

const Song = () => {
  return (
    <div>
      <div className="flex justify-between gap-2 mb-[2px] items-center bg-slate-100/20 hover:bg-slate-100/50 cursor-pointer p-2 rounded-md">
        <div className="flex gap-3">
          <img
            className="size-10 rounded-full border border-black"
            src="https://cdn2.geckoandfly.com/wp-content/uploads/2017/12/530-album-cover.jpg"
            alt="song"
          />
          <div>
            <p>Song name</p>
            <p className="font-thin text-sm">The script</p>
          </div>
        </div>
        <div>04:23</div>
      </div>
    </div>
  );
};

export default Song;
