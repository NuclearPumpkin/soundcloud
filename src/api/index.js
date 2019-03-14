
import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import Cookies from 'js-cookie';
import { CLIENT_ID, TEMP_CLIENT_ID } from '../constants/authentication';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = `//api.soundcloud.com/`;
//  eslint-disable-next-line
let AUTH_PARAM = null;

const responseBody = res => res.body;

const requests = {
  get: (url) => superagent.get(`${API_ROOT}${url}${AUTH_PARAM}`).then(responseBody),
};

const Genres = {
  get: (url, symbol) => requests.get(`${url}${symbol}`),
};

const setAccessToken = () => {
  const accessToken = Cookies.get('accessToken');
  if (!accessToken) {
    setClientID();
  }
  AUTH_PARAM = `oauth_token=${accessToken}`;
};

const setClientID = () => {
  AUTH_PARAM = `client_id=${CLIENT_ID}`;
};

const setTempClientID = () => {
  AUTH_PARAM = `client_id=${TEMP_CLIENT_ID}`;
};

export {
  setAccessToken,
  setClientID,
  setTempClientID,
  Genres,

};
