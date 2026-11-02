import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../redux/slice/moviesSlice";
import { API_OPTIONS, UpcomingMovies_API_URL } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(UpcomingMovies_API_URL, API_OPTIONS);
    const response = await data.json();
    console.log("Upcoming Movies:", response.results);
    dispatch(addUpcomingMovies(response.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
