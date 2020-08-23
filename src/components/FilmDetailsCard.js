import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const FilmDetailsCard = (props) => {
  if (props.film) {
    const {
      film: {
        Title,
        Poster,
        Year,
        Country,
        Plot,
        Runtime,
        Genre,
        imdbRating,
        Director,
        Actors,
      },
    } = props;

    return (
      <>
        <h1 className="film__details-title">
          {Title} <span>({Year})</span>
        </h1>
        <div className="film__details__card">
          <img src={Poster} alt={Title} />
          <div className="film__details">
            <div className="film__details-plot">{Plot}</div>
            <div className="film__details-info">
              <div>Country: {Country}</div>
              <div>Genre: {Genre}</div>
              <div>Duration: {Runtime}</div>
              <div className="film__details-rating">IMDB: {imdbRating}</div>
              <div>Director: {Director}</div>
              <div>Actors: {Actors}</div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <LoadingSpinner />;
  }
};

export default FilmDetailsCard;
