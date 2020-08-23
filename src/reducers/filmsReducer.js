import {
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_FAILURE,
} from "../constants";

const initialState = {
  searchFilm: "batman",
  films: [],
  loading: false,
  error: null,
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILMS_REQUEST:
      return {
        ...state,
        searchFilm: action.payload,
        loading: true,
        error: false,
      };
    case FETCH_FILMS_SUCCESS:
      return {
        ...state,
        films: action.payload,
        loading: false,
      };
    case FETCH_FILMS_FAILURE:
      return {
        ...state,
        films: [],
        error: action.payload,
      };
    default:
      return initialState;
  }
};

export default filmsReducer;
