import { all, fork, AllEffect, ForkEffect, takeLatest } from 'redux-saga/effects';
import { SET_MODAL_VISIBILITY } from './modal.action-types';


function* setModalVisibilitySagaWatcher(): Generator<AllEffect<ForkEffect>> {
    yield all([takeLatest(SET_MODAL_VISIBILITY, setModalVisibilitySagaWatcher)]);
  }

export default function* modalSaga(): Generator<AllEffect<ForkEffect>> {
    yield all([
      fork(setModalVisibilitySagaWatcher),
    ]);
  }
  