import { combineReducers } from "redux";

import filmsReducer from "./filmsReducer";
import chosenFilmReducer from "./chosenFilmReducer";

const rootReducer = combineReducers({
  films: filmsReducer,
  chosenFilm: chosenFilmReducer,
});

export default rootReducer;
