import { produce } from 'immer';

import {SET_MODAL_VISIBILITY} from './modal.action-types';
import { ActionsTypes, ModalsState, ModalsKeys, ModalState} from './modal.types';

const initialState: ModalsState = {
  modals: [
    {
      key: ModalsKeys.CREATE_MODAL,
      visible: false,
    }, 
    {
      key: ModalsKeys.EDIT_MODAL,
      visible: false
    }
  ]
};

export default (state = initialState, action: ActionsTypes): ModalsState => {
  switch (action.type) {
    case SET_MODAL_VISIBILITY: {
      return produce(state, (draft) => {
        draft.modals.forEach((modal: ModalState) => {
          if (modal.key === action.payload.key) {
            modal.visible = action.payload.visible;
          }
        });
      });
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
