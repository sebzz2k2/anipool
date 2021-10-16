import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Animecard from "../Card/Animecard";
import jikan from "../../API/jikan";
import ReactLoading from "react-loading";

const Webapp = () => {
  // useState items
  const [searchQuery, setSearchQuery] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [mangaList, setMangaList] = useState([]);
  const [loading, setLoading] = useState(true);

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
        // console.log(response.data.results);
        setAnimeList(response.data.results);
        setLoading(false);
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
        // console.log(response.data.results);
        setMangaList(response.data.results);
      });
  };

  useEffect(() => {
    fetchAnime("anime");
    fetchManga("manga");
  }, []);
  return (
    <>
      <div className="">
        <div className="webapp  ">
          <Navbar
            className=""
            handleSearch={handleSearch}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {/* Animecard */}
          {loading ? (
            <div className="flex justify-center p-48 ">
              <ReactLoading
                type={"bars"}
                color={"rgba(16, 185, 129)"}
                height={100}
                width={100}
              />
            </div>
          ) : (
            <>
              <div className="flex mx-10 scrollbar h-60 mt-10">
                {animeList.map((anime) => (
                  <Animecard value={anime} key={anime.mal_id} />
                ))}
              </div>
              <div className="flex mx-10 scrollbar  h-60">
                {mangaList.map((manga) => (
                  <Animecard value={manga} key={manga.mal_id} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Webapp;
