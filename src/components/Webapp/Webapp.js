import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Animecard from "../Card/Animecard";
import jikan from "../../API/jikan";

const Webapp = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [mangaList, setMangaList] = useState([]);

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
          limit: 10,
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
          limit: 10,
        },
      })
      .then((response) => {
        console.log(response.data.results);
        setMangaList(response.data.results);
      });
  };
  return (
    <>
      <div className="flex justify-center py-10 ">
        <div className="webapp ">
          <Navbar
            className=""
            handleSearch={handleSearch}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
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
    </>
  );
};

export default Webapp;
