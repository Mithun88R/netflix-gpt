import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { Netflix_Background } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-10">
        <img
          src={Netflix_Background}
          alt="Netflix Background"
          className="w-full h-screen object-cover"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
