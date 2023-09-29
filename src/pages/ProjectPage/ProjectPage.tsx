import './ProjectPage.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

import ProjectModal from '../../components/ProjectModal/ProjectModal';

import React from 'react';
import Project from '../../types/Project';

import { useTranslation } from 'react-i18next';

import { useDispatch } from 'react-redux';
import { actions as ModalActions } from '../../store/modal';
import { getProjectsSelector } from '../../store/project';
import { useSelector } from 'react-redux';

const ProjectPage: React.FC = () => {
  const dispatch = useDispatch();
  const projects = useSelector(getProjectsSelector);
  const { t } = useTranslation();

  const openCreateModal = (): void => {
    dispatch(ModalActions.setModalVisibility({
      visible: true
    }));
  }

  return (
    <>
      <div className="page">
        <div className="header">
          <h1>{t('project.labels.page')}</h1>
          <button onClick={openCreateModal} className="create-project-button">{t('add_new')}</button>
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
      <ProjectModal />
    </>
  );
}

export default ProjectPage;
