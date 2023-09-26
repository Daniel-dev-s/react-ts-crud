import '../assets/css/pages/ProjectPage.css';
import ProjectCard from '../components/projects/ProjectCard';

import AddProjectModal from '../components/projects/AddProjectModal';
import EditProjectModal from '../components/projects/EditProjectModal';

import React, { useState } from 'react';
import Project from '../types/Project';

import { useDispatch } from 'react-redux';
import { ModalsKeys, actions as ModalActions } from '../store/modal';
import { getProjectsSelector } from '../store/project';
import { useSelector } from 'react-redux';

const ProjectPage: React.FC = () => {
  const dispatch = useDispatch();
  const projects = useSelector(getProjectsSelector);

  const openCreateModal = (): void => {
    dispatch(ModalActions.setModalVisibility({
      key: ModalsKeys.CREATE_MODAL,
      visible: true
    }));
  }

  return (
    <>
      <div className="page">
        <div className="header">
          <h1>Проекты</h1>
          <button onClick={openCreateModal} className="create-project-button">Создать новый</button>
        </div>
        <div className="projects-container">
          {
            projects.map((project: Project, index: number): React.ReactElement =>
              <ProjectCard
                key={index}
                project={project}
              />
            )
          }
        </div>
      </div>
      <AddProjectModal />
      <EditProjectModal />
    </>
  );
}

export default ProjectPage;
