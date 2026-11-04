import React, { useState } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { useRef } from "react";
import client from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResults } from "../redux/slice/gptSlice";
import fetchMovieDetails from "../hooks/useFetchTmdbMovieDetails";
import "./GptSearchBar.css";

const GptSearchBar = () => {
  const [loading, setLoading] = useState(false);

  const language = useSelector((store) => store.config.language);

  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearch = async () => {
    // Implement your GPT search logic here

    const searchValue = searchText.current.value;
    if (!searchValue.trim()) return;

    setLoading(true);

    const gptSearchQuery = `
    Act as a movie recommendation system.
    Suggest exactly 5 movies for: ${searchValue}.
    Return only movie names separated by commas.Like this: Movie1, Movie2, Movie3, Movie4, Movie5
  `;

    // Make an API call to your GPT backend with the search text and get Movie results

    const interaction = await client.interactions.create({
      model: "gemini-3.5-flash-lite",
      input: gptSearchQuery,
    });
    console.log("interaction", interaction.output_text);

    const movieNames = interaction.output_text
      .split(",")
      .map((name) => name.trim());

    const tmdbMovieDetails = await Promise.all(
      movieNames.map((movieName) => fetchMovieDetails(movieName)),
    );
    // You can now use the movieNames array to display the recommended movies in your UI or perform any other actions as needed.
    // console.log("TMDB Movie Details:", tmdbMovieDetails);
    dispatch(
      addGptMovieResults({
        movieNames: movieNames,
        movieDetails: tmdbMovieDetails,
      }),
    );
    setLoading(false);
  };

  return (
    <div className="pt-[10%] justify-center  flex  ">
      <form
        className=" w-1/2 grid grid-cols-12 bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          placeholder={lang[language].placeholder}
          className="m-4 p-4 col-span-9 rounded-md  text-black bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="bg-blue-500 col-span-3 cursor-pointer text-white p-4 m-4 rounded-md"
          onClick={handleGptSearch}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="loader"></div>
              <span>Searching...</span>
            </div>
          ) : (
            lang[language].search
          )}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
