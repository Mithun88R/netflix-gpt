import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="absolute w-screen aspect-video top-1/10 pt-[10%] px-24 text-white p-4 rounded-lg bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-sm wrap-normal w-60">{description}</p>
      <div className="flex gap-4 pt-4">
        <button className="bg-white text-black px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-600">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
