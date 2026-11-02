import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/slice/moviesSlice";
import { API_OPTIONS, PopularMovies_API_URL } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(PopularMovies_API_URL, API_OPTIONS);
    const response = await data.json();
    console.log("Popular Movies:", response.results);
    dispatch(addPopularMovies(response.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
