import React from "react";
import { useSelector } from "react-redux";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const mainMovie = movies?.[0];

  const { original_title, overview, id } = mainMovie || {};
  console.log("Main Movie:", mainMovie);
  return (
    <div>
      <VideoTitle title={original_title} description={overview} />
      <VideoBackGround movieId={id} />
    </div>
  );
};

export default MainContainer;
