
import { put, call, takeLatest } from 'redux-saga/effects';
import { Activities } from '../../services/api';
import { FETCH_ACTIVITIES, FETCH_ACTIVITIES_SUCCESS, FETCH_ACTIVITIES_FAILURE } from '../../constants/actionTypes';


function* fetchActivities({ url, symbol }) {
  try {
    const payload = yield call(Activities.get, url, symbol);
    yield put({ type: FETCH_ACTIVITIES_SUCCESS, payload });
  } catch (err) {
    const errResp = err.response.body;
    yield put({ type: FETCH_ACTIVITIES_FAILURE, errResp });
  }
}

export function* watchFetchActivities() {
  yield takeLatest(FETCH_ACTIVITIES, fetchActivities);
}
