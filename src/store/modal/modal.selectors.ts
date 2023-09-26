import { createSelector } from 'reselect';

import { AppState } from '../root.reducer';
import { ModalState } from './modal.types';

const getModalsState = (state: AppState): ModalState[] => state.modal.modals;

export const getModalsStateSelector = createSelector(
  getModalsState,
  (visible) => visible,
);

