import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/slice/moviesSlice";
import { API_OPTIONS, TopRatedMovies_API_URL } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(TopRatedMovies_API_URL, API_OPTIONS);
    const response = await data.json();
    console.log("TopRated Movies:", response.results);
    dispatch(addTopRatedMovies(response.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
