import { produce } from 'immer';

import { ADD_PROJECT, REMOVE_PROJECT, SAVE_PROJECT } from './project.action-types';
import { ActionsTypes, PROJECTS_STORAGE_KEY, ProjectsState } from './project.types';

import Project from '../../types/Project';

const getProjects = (): Project[] => {
  const saved = localStorage.getItem(PROJECTS_STORAGE_KEY);
  if (saved) {
    return JSON.parse(saved);
  }

  return [];
}

const initialState: ProjectsState = {
  projects: getProjects(),
  editingProject: null,
};

export default (state = initialState, action: ActionsTypes): ProjectsState => {
  switch (action.type) {
    case ADD_PROJECT: {
      return produce(state, (draft) => {
        draft.projects.push(action.payload.project);
        localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(draft.projects));
      });
    }

    case REMOVE_PROJECT: {
      return produce(state, (draft) => {
        draft.projects = draft.projects.filter((project: Project) => project.id !== action.payload.id);
        localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(draft.projects));
      });
    }

    case SAVE_PROJECT: {
      return produce(state, (draft) => {
        draft.projects.forEach((project: Project) => {
          if (project.id === action.payload.project.id) {
            project.title = action.payload.project.title;
            project.description = action.payload.project.description;
          }
        });

        localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(draft.projects));
      });
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
