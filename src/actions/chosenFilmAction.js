import {
  FETCH_CHOSEN_FILM_REQUEST,
  FETCH_CHOSEN_FILM_SUCCESS,
  FETCH_CHOSEN_FILM_FAILURE,
} from "../constants";

const key = "bf752dc7";

export const handleChosenFilmRequestAction = (chosenFilmID) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_CHOSEN_FILM_REQUEST,
    });

    fetch(`https://www.omdbapi.com/?i=${chosenFilmID}&apikey=${key}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_CHOSEN_FILM_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_CHOSEN_FILM_FAILURE,
          payload: err,
        });
      });
  };
};
