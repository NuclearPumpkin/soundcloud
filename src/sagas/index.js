
import { fork, all } from 'redux-saga/effects';
import { watchFetchActivities } from './browse';

export default function* rootSaga() {
  yield all([
    fork(watchFetchActivities),
  ]);
}
