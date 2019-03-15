import * as actionTypes from '../../constants/actionTypes';

export function setSelectedGenre(genre) {
  return {
    type: actionTypes.SET_SELECTED_GENRE,
    genre
  };
}

export const fetchActivitiesByGenre = (nextHref, genre) => {
  const initHref = `tracks?linked_partitioning=1&limit=20&offset=0&tags=${genre}`;
  const url = nextHref || initHref;
  return {
    type: actionTypes.FETCH_ACTIVITIES,
    url,
    symbol: '&',
  };
};
