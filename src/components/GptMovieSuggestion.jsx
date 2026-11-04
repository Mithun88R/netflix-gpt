import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { gptMovieResults, gptMovieNames } = gpt;
  if (!gptMovieNames) return <div>No movie suggestions available.</div>;

  return (
    <div className="m-4 p-4 bg-black/70 text-white">
      <h2 className="text-xl font-bold mb-4">GPT Movie Suggestions</h2>
      <div>
        {gptMovieNames.map((movie, index) => (
          <MovieList
            key={index}
            title={movie}
            movies={gptMovieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
