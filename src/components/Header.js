import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <div className="navbar__brand">
          <Link to="/kinopoisk-like/">
            KinoPoisk<span>Like</span>
          </Link>
        </div>
        <div className="navbar__text">Movies, movies and movies again</div>
      </div>
    </header>
  );
};

export default Header;
