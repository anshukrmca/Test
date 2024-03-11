import React from "react";

const Song = ({item}) => {
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
            <p>{item?.title}</p>
            <p className="font-thin text-sm">{item?.artist}</p>
          </div>
        </div>
        <div>{(item?.duration / 60).toFixed(2)}</div>

      </div>
    </div>
  );
};

export default Song;
