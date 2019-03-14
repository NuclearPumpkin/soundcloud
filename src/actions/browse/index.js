// import { arrayOf, normalize } from 'normalizr';
import * as actionTypes from '../../constants/actionTypes';
import * as requestTypes from '../../constants/requestTypes';

export function setSelectedGenre(genre) {
  return {
    type: actionTypes.SET_SELECTED_GENRE,
    genre
  };
}

export const fetchActivitiesByGenre = (nextHref, genre) => (dispatch, getState) => {
  const requestType = requestTypes.GENRES;
  const initHref = unauthApiUrl(`tracks?linked_partitioning=1&limit=20&offset=0&tags=${genre}`, '&');

};
