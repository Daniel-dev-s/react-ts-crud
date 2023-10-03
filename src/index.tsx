import React from 'react';
import ReactDOM from 'react-dom/client';

import './i18n/config';

import GlobalStyles from './styles/global';

import ProjectPage from './pages/ProjectPage/ProjectPage';

import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </Provider>
  </React.StrictMode>
);