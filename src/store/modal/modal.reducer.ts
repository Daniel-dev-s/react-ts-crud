import { produce } from 'immer';

import {SET_MODAL_VISIBILITY} from './modal.action-types';
import { ActionsTypes, ModalState} from './modal.types';

const initialState: ModalState = {
  project: undefined,
  visible: false
};

export default (state = initialState, action: ActionsTypes): ModalState => {
  switch (action.type) {
    case SET_MODAL_VISIBILITY: {
      return produce(state, (draft) => {
        draft.visible = action.payload.visible;
        draft.project = action.payload.project;
      });
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
