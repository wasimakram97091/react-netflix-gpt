import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className=" w-screen aspect-video pt-[25%] px-12 absolute bg-gradient-to-r from-black text-white ">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="my-4 w-1/2 text-lg">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-white px-6 py-2 font-semibold rounded-md text-base text-black hover:bg-slate-300">
          <i className="fa-solid fa-play pr-1"></i> Play
        </button>
        <button className="bg-gray-500 px-6 py-2 font-semibold rounded-md text-base bg-opacity-50 text-white">
          <i className="fa-solid fa-circle-info pr-1"></i>More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
