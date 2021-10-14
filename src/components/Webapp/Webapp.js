import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
// import axios from "axios";
import jikan from "../../API/jikan";

const Webapp = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  //   const [anime ,setAnime] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(searchQuery);
    fetchManga(searchQuery);
  };

  const fetchAnime = async (searchQuery) => {
    await jikan
      .get("search/anime", {
        params: {
          q: searchQuery,
          page: 1,
          limit: 7,
        },
      })
      .then((response) => {
        console.log(response.data.results);
      });
  };
  const fetchManga = async (searchQuery) => {
    await jikan
      .get("search/manga", {
        params: {
          q: searchQuery,
          page: 1,
          limit: 7,
        },
      })
      .then((response) => {
        console.log(response.data.results);
      });
  };
  return (
    <>
      <div className="flex justify-center py-10 ">
        <div className="webapp ">
          <Navbar
            handleSearch={handleSearch}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </div>
    </>
  );
};

export default Webapp;
