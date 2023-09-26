import { createSelector } from 'reselect';

import { AppState } from '../root.reducer';
import Project from '../../types/Project';

const getProjects = (state: AppState): Project[] => state.project.projects;
const getEditingProject = (state: AppState): Project | null => state.project.editingProject;

export const getProjectsSelector = createSelector(
  getProjects,
  (projects) => projects,
);

export const getEditingProjectSelector = createSelector(
  getEditingProject,
  (project) => project,
);

