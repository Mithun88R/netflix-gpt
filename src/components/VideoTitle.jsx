import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="absolute w-full aspect-video pt-[30%] md:pt-[18%]  text-white p-4 rounded-lg bg-linear-to-r from-black z-10">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:block md:text-base wrap-break-word md:wrap-normal w-90">
        {description}
      </p>
      <div className="flex gap-2 md:gap-4 pt-2 md:pt-4">
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
