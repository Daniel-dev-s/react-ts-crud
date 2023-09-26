import { combineReducers } from 'redux';
import projectReducer from './project/project.reducer';
import modalReducer from './modal/modal.reducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  project: projectReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
