import { useState, useEffect } from "react";
import React from "react";

import axios from "axios";

import SingleContent from "../../../component/SingleContent/SingleContent";
import CustomPagination from "../../Pagination/CustomPagination";

import "./Trending.css";

const Trending = () => {
  const [page, setPage] = useState(1);
  const key = "ca5dbfc6ba31da54c50bb80fcace8d95";
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/trending/all/day?api_key=${key}&page=${page} `);
    /* console.log(data.results); */
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
