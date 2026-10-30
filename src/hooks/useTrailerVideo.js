import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

import { addTrailerVideo } from "../redux/slice/moviesSlice";

import { useDispatch, useSelector } from "react-redux";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideo = async (movieId) => {
    const videoData = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const videoResponse = await videoData.json();
    console.log("Movie Video Response:", videoResponse);
    const trailerVideo = videoResponse.results.find(
      (video) => video.type === "Trailer",
    );
    const trailer =
      trailerVideo && trailerVideo.length !== 0
        ? trailerVideo
        : videoResponse.results[0];
    console.log("Trailer:", trailer);
    dispatch(addTrailerVideo(trailer));
    // return videoResponse;
  };

  useEffect(() => {
    getMovieVideo(movieId);
  }, []);
};

export default useTrailerVideo;
