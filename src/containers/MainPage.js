import React, { useEffect } from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import Films from "../components/Films";
import LoadingSpinner from "../components/LoadingSpinner";

import { handleFilmsRequestAction } from "../actions";

const MainPage = (props) => {
  const { filmsRequestAction, error, films, loading, searchFilm } = props;

  useEffect(() => {
    filmsRequestAction(searchFilm);
  }, []);

  return (
    <>
      <Search searchFilm={searchFilm} filmsRequestAction={filmsRequestAction} />
      {error ? (
        <h3 className="error">Error: {error.message}</h3>
      ) : loading ? (
        <LoadingSpinner />
      ) : (
        <Films films={films} />
      )}
    </>
  );
};

const mapStateToProps = (store) => {
  return {
    searchFilm: store.films.searchFilm,
    films: store.films.films,
    loading: store.films.loading,
    error: store.films.error,
  };
};

const mapHandleToProps = (dispatch) => {
  return {
    filmsRequestAction: (searchFilm) =>
      dispatch(handleFilmsRequestAction(searchFilm)),
  };
};

export default connect(mapStateToProps, mapHandleToProps)(MainPage);
