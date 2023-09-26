import { actions } from './modal.actions';

export enum ModalsKeys {
  CREATE_MODAL = 'create_modal', EDIT_MODAL = 'edit_modal'
}

export interface ModalState {
  key: ModalsKeys,
  visible: boolean
}

export interface ModalsState {
  modals: ModalState[]
}

export interface ModalVisibilityPayload {
  key: ModalsKeys,
  visible: boolean
}

export type PropertiesTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export type ActionsTypes = ReturnType<PropertiesTypes<typeof actions>>;
