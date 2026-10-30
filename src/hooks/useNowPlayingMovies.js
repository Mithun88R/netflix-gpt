import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/slice/moviesSlice";
import { API_OPTIONS, NowPlayingMovies_API_URL } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(NowPlayingMovies_API_URL, API_OPTIONS);
    const response = await data.json();
    console.log("Now Playing Movies:", response.results);
    dispatch(addNowPlayingMovies(response.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
