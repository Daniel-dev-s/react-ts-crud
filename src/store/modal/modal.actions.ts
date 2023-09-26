import {SET_MODAL_VISIBILITY} from './modal.action-types';
import {ModalVisibilityPayload} from './modal.types';

export const actions = {
  setModalVisibility: (payload: ModalVisibilityPayload) =>
    ({
      type: SET_MODAL_VISIBILITY,
      payload,
    } as const),
};
