import React from "react";
import { Img_Poster_Path } from "../utils/constants";

const MovieCard = ({ title, poster_path }) => {
  return (
    <div className="w-48 pr-4">
      <img src={Img_Poster_Path + poster_path} alt={title} />
    </div>
  );
};

export default MovieCard;
