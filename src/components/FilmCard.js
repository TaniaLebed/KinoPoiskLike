import React from "react";
import { Link } from "react-router-dom";

const FilmCard = ({ film: { imdbID, Title, Poster, Year, Type } }) => {
  return (
    <div className="film__card">
      <div className="film__poster">
        <Link to={`/film/${imdbID}`}>
          <img src={Poster} alt={Title} />
        </Link>
      </div>
      <div className="film__card-body">
        <Link to={`/film/${imdbID}`}>
          <div className="film__title">{Title}</div>
        </Link>
        <div className="film__info">
          {Type === "movie" ? "Movie" : "Series"}, {Year}
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
