import {
  FETCH_CHOSEN_FILM_REQUEST,
  FETCH_CHOSEN_FILM_SUCCESS,
  FETCH_CHOSEN_FILM_FAILURE,
} from "../constants";

const initialState = {
  chosenFilm: null,
  loading: false,
  error: null,
};

const chosenFilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHOSEN_FILM_REQUEST:
      return {
        chosenFilm: null,
        loading: true,
        error: null,
      };
    case FETCH_CHOSEN_FILM_SUCCESS:
      return {
        chosenFilm: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_CHOSEN_FILM_FAILURE:
      return {
        chosenFilm: null,
        loading: false,
        error: action.payload,
      };
    default:
      return initialState;
  }
};

export default chosenFilmReducer;
