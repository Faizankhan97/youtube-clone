import React, { useState, useEffect } from "react";
import Youtube from "../assets/youtube.jpg";
import Humburger from "../assets/humburger_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlices";
import { YOUTUBE_SEARCH } from "../utils/constant";
import { cacheResults } from "../utils/searchSlices";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionSearch, setSuggestionSearch] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const seacrhCache = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const toggleHandleMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (seacrhCache[searchQuery]) {
        setSuggestionSearch(seacrhCache[searchQuery]);
      } else {
        searchSuggest();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const searchSuggest = async () => {
    console.log({ searchQuery });
    const res = await fetch(YOUTUBE_SEARCH + searchQuery);
    const data = await res.json();
    setSuggestionSearch(data[1]);

    dispatch(
      cacheResults({
        [searchQuery]: data[1],
      })
    );
  };
  return (
    <div className="grid grid-flow-col p-5 mb-0 shadow-lg">
      <div className="flex col-span-1 mx-2">
        <img
          src={Humburger}
          alt=""
          onClick={() => toggleHandleMenu()}
          className="h-8"
        />
        <img src={Youtube} alt="" className="h-8" />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            type="button"
            className="border border-gray-400 p-2 rounded-r-full bg-gray-300"
          >
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-2 w-[29rem] shadow-lg rounded-lg">
            <ul>
              {suggestionSearch.map((suggest, index) => (
                <li key={index} className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
                  {suggest}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default Header;
