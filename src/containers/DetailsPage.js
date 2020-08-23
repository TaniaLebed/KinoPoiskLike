import React, { useEffect } from "react";
import { connect } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import FilmDetailsCard from "../components/FilmDetailsCard";

import { handleChosenFilmRequestAction } from "../actions";
import ErrorBoundry from "../components/ErrorBoundry";

const DetailsPage = (props) => {
  const { chosenFilmRequestAction, error, loading, chosenFilm } = props;

  useEffect(() => {
    chosenFilmRequestAction(props.match.params.id);
  }, []);

  if (error) {
    return <h3 className="error">Error: {error.message}</h3>;
  } else if (loading) {
    return <LoadingSpinner />;
  } else {
    return (
      <ErrorBoundry>
        <div className="filmDetails">
          <FilmDetailsCard film={chosenFilm} />
        </div>
      </ErrorBoundry>
    );
  }
};

const mapStateToProps = (store) => {
  return {
    chosenFilm: store.chosenFilm.chosenFilm,
    loading: store.chosenFilm.loading,
    error: store.chosenFilm.error,
  };
};

const mapHandleToProps = (dispatch) => {
  return {
    chosenFilmRequestAction: (chosenFilmID) =>
      dispatch(handleChosenFilmRequestAction(chosenFilmID)),
  };
};

export default connect(mapStateToProps, mapHandleToProps)(DetailsPage);
