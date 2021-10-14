import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Animecard from "../Card/Animecard";
import jikan from "../../API/jikan";

const Webapp = () => {
  // useState items
  const [searchQuery, setSearchQuery] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [mangaList, setMangaList] = useState([]);

  // calls functions to fetch deatils from API based on searchQuery
  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(searchQuery);
    fetchManga(searchQuery);
  };

  // function to fetch anime and manga
  const fetchAnime = async (searchQuery) => {
    await jikan
      .get("search/anime", {
        params: {
          q: searchQuery,
          page: 1,
          limit: 20,
        },
      })
      .then((response) => {
        console.log(response.data.results);
        setAnimeList(response.data.results);
      });
  };
  const fetchManga = async (searchQuery) => {
    await jikan
      .get("search/manga", {
        params: {
          q: searchQuery,
          page: 1,
          limit: 20,
        },
      })
      .then((response) => {
        console.log(response.data.results);
        setMangaList(response.data.results);
      });
  };

  return (
    <>
      <div className="">
        <div className="webapp ">
          <Navbar
            className=""
            handleSearch={handleSearch}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <h2 className="font-bold text-green-500 text-lg mx-10 pt-2">
            Search Results....
          </h2>

          {/* Animecard */}
          <div className="flex">
            <div className="flex mx-10 scrollbar">
              {animeList.map((anime) => (
                <Animecard value={anime} key={anime.mal_id} />
              ))}
            </div>
            <div className="flex mx-10 scrollbar">
              {mangaList.map((manga) => (
                <Animecard value={manga} key={manga.mal_id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Webapp;
