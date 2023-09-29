import { actions } from './modal.actions';
import Project from '../../types/Project';

export enum ModalsKeys {
  CREATE_MODAL = 'create_modal', EDIT_MODAL = 'edit_modal'
}

export interface ModalState {
  project?: Project,
  visible: boolean
}

export interface ModalVisibilityPayload {
  project?: Project,
  visible: boolean
}

export type PropertiesTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export type ActionsTypes = ReturnType<PropertiesTypes<typeof actions>>;
