import React from 'react';

import trashIcon from '../../assets/img/trashIcon.svg';
import editIcon from '../../assets/img/editIcon.svg';

import Project from '../../types/Project';

import { useDispatch } from 'react-redux';

import { actions as ProjectActions } from '../../store/project';
import { actions as ModalActions } from '../../store/modal';

import { StyledProjectCard, ProjectCardHeader, HeaderButton, Title } from './ProjectCard.styles';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {

    const dispatch = useDispatch();

    const editProjectClick = (): void => {
        dispatch(ModalActions.setModalVisibility({
            project: props.project,
            visible: true
        }));
    }

    const removeProjectClick = (): void => {
        dispatch(ProjectActions.removeProject({ id: props.project.id }));
    }

    return <StyledProjectCard>
        <ProjectCardHeader>
            <Title>{props.project.title}</Title>
            <div>
                <HeaderButton onClick={editProjectClick}>
                    <img src={editIcon} alt="edit" />
                </HeaderButton>
                <HeaderButton onClick={removeProjectClick}>
                    <img src={trashIcon} alt="delete" />
                </HeaderButton>
            </div>
        </ProjectCardHeader>
        <p>{props.project.description}</p>
    </StyledProjectCard>;
}

export default ProjectCard;