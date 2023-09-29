import {ADD_PROJECT, REMOVE_PROJECT, SAVE_PROJECT} from './project.action-types';
import {AddProjectPayload, SaveProjectPayload, RemoveProjectPayload } from './project.types';

export const actions = {
  addProject: (payload: AddProjectPayload) =>
    ({
      type: ADD_PROJECT,
      payload,
    } as const),
  removeProject: (payload: RemoveProjectPayload) =>
    ({
      type: REMOVE_PROJECT,
      payload,
    } as const),
  saveProject: (payload: SaveProjectPayload) =>
    ({
      type: SAVE_PROJECT,
      payload,
    } as const),
};
