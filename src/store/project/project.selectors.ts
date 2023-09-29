import { createSelector } from 'reselect';

import { AppState } from '../root.reducer';
import Project from '../../types/Project';

const getProjects = (state: AppState): Project[] => state.project.projects;

export const getProjectsSelector = createSelector(
  getProjects,
  (projects) => projects,
);
