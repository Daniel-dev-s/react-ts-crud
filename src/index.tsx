import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import ProjectPage from './pages/ProjectPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProjectPage />
  </React.StrictMode>
);