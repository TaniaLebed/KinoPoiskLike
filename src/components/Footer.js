import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <footer className="footer">
      <div className="footer__text">
        Powered by
        <a href="https://vk.com/tania_lebed">
          Tania Lebed
          <span>
            <FontAwesomeIcon icon={faComment} swapOpacity />
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Navbar;
