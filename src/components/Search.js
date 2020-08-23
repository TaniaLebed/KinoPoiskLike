import React, { useState } from "react";
import { Input, InputGroup, InputGroupAddon, Button, Alert } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ filmsRequestAction, searchFilm }) => {
  const [film, setFilm] = useState(null);
  const [error, setError] = useState(false);

  const onDismiss = () => setError(false);

  const handleChange = (event) => {
    const searchFilm = event.target.value;
    if (searchFilm.search(/[^A-Za-z\s\d]/g) === -1) {
      setError(false);
      setFilm(searchFilm);
    } else setError(true);
  };

  const handleSubmit = () => {
    filmsRequestAction(film);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter" && !error) {
      handleSubmit();
    }
  };

  return (
    <div className="search__area">
      <InputGroup onKeyPress={handleEnterPress}>
        <Input
          type="text"
          placeholder={searchFilm}
          className="search"
          onChange={handleChange}
        />
        <InputGroupAddon addonType="append">
          <Button
            className="search__button"
            color="warning"
            disabled={error}
            onClick={handleSubmit}
          >
            <FontAwesomeIcon icon={faSearch} swapOpacity />
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <Alert color="warning" isOpen={error} toggle={onDismiss}>
        <div style={{ textAlign: "center" }}>
          English Only, No Symbols except Letters and Numbers
        </div>
      </Alert>
    </div>
  );
};

export default Search;
