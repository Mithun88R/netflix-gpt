import React from "react";
import { Img_Poster_Path } from "../utils/constants";

const MovieCard = ({ title, poster_path }) => {
  if (!poster_path) return null; // Skip rendering if poster_path is not available
  return (
    <div className="w-32 md:w-48 pr-4">
      <img src={Img_Poster_Path + poster_path} alt={title} />
    </div>
  );
};

export default MovieCard;
