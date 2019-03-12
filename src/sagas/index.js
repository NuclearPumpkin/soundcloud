/*
 * --------------------------------------
 * Copyright (c) 2019 AssetTracker.CO
 * --------------------------------------
 */

import { fork, all } from 'redux-saga/effects';
import { watchGetData } from './app';

export default function* rootSaga() {
    yield all([
        fork(watchGetData)
    ]);
} 