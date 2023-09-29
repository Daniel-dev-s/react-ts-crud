import { createSelector } from 'reselect';

import { AppState } from '../root.reducer';
import { ModalState } from './modal.types';

const getModalState = (state: AppState): ModalState => state.modal;

export const getModalsStateSelector = createSelector(
  getModalState,
  (visible) => visible,
);

