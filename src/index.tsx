import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';

import './i18n/config';

import ProjectPage from './pages/ProjectPage/ProjectPage';

import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProjectPage />
    </Provider>
  </React.StrictMode>
);