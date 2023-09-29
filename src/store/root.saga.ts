import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects';

import modalSaga from './modal/modal.sagas';

export function* rootSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([fork(modalSaga)]);
}
