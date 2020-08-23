import React from "react";
import FilmCard from "./FilmCard";

const Films = ({ films }) => {
  return (
    <main className="main">
      <div className="main__films">
        {films.map((film) => {
          return <FilmCard key={film.imdbID} film={film} />;
        })}
      </div>
    </main>
  );
};

export default Films;
