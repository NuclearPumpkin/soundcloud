
import { put, call, takeLatest } from 'redux-saga/effects';

function* getData(action) {
  try {
    // const payload = yield call(Notifications.getNotications);
    yield put({ type: "FETCH_DATA", payload: { name: 'naresh' } });
  } catch (err) {
    // const errResp = err.response.body;
    // yield put({ type: GET_NOTIFICATIONS_FAILURE, errResp });
  }
}

export function* watchGetData() {
  yield takeLatest("FETCH_DATA", getData);
}
