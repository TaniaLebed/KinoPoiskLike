import {
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_FAILURE,
} from "../constants";

const key = "bf752dc7";

export const handleFilmsRequestAction = (searchFilm) => {
  const searchFilmRequest = searchFilm
    .trim()
    .toLowerCase()
    .replace(/\W+/g, "+");

  return (dispatch) => {
    dispatch({
      type: FETCH_FILMS_REQUEST,
      payload: searchFilm,
    });

    fetch(`http://www.omdbapi.com/?s=${searchFilmRequest}&apikey=${key}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          dispatch({
            type: FETCH_FILMS_SUCCESS,
            payload: data.Search,
          });
        } else throw new Error("Movie not found");
      })
      .catch((err) => {
        dispatch({
          type: FETCH_FILMS_FAILURE,
          payload: err,
        });
      });
  };
};
