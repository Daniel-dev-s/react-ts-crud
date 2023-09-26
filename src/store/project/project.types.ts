import { actions } from './project.actions';
import Project from '../../types/Project';

export const PROJECTS_STORAGE_KEY = 'projects';

export interface ProjectsState {
  projects: Project[],
  editingProject: Project | null
}

export interface AddProjectPayload {
  project: Project
}

export interface RemoveProjectPayload {
  id: number
}

export interface SaveProjectPayload {
  project: Project
}

export interface SetEditingProjectPayload {
  project: Project
}

export type PropertiesTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export type ActionsTypes = ReturnType<PropertiesTypes<typeof actions>>;
