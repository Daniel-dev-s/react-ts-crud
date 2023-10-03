import ProjectCard from '../../components/ProjectCard/ProjectCard';

import ProjectModal from '../../components/ProjectModal/ProjectModal';

import React from 'react';
import Project from '../../types/Project';

import { useTranslation } from 'react-i18next';

import { useDispatch, useSelector } from 'react-redux';

import { actions as ModalActions } from '../../store/modal';
import { getProjectsSelector } from '../../store/project';

import { StyledHeader, StyledProjectsWrapper, Title, StyledCreateProjectButton, PageWrapper } from './ProjectPage.styles';

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
      <PageWrapper>
        <StyledHeader>
          <Title>{t('project.labels.page')}</Title>
          <StyledCreateProjectButton onClick={openCreateModal}>{t('add_new')}</StyledCreateProjectButton>
        </StyledHeader>
        <StyledProjectsWrapper>
          {
            projects.map((project: Project, index: number): React.ReactElement =>
              <ProjectCard
                key={index}
                project={project}
              />
            )
          }
        </StyledProjectsWrapper>
      </PageWrapper>
      <ProjectModal />
    </>
  );
}

export default ProjectPage;
