import * as actionTypes from '../../constants/actionTypes';

const initialState = {
  selectedGenre: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_SELECTED_GENRE:
      return setSelectedGenre(state, action.genre);
  }

  return state;
}

function setSelectedGenre(state, genre) {
  const obj = {
    selectedGenre: genre
  };

  return Object.assign({}, state, obj);
}
