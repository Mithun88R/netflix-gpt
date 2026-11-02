import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.language);
  return (
    <div className="pt-[10%] justify-center  flex  ">
      <form className=" w-1/2 grid grid-cols-12 bg-black">
        <input
          type="text"
          placeholder={lang[language].placeholder}
          className="m-4 p-4 col-span-9 rounded-md  text-black bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 col-span-3 text-white p-4 m-4 rounded-md">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
