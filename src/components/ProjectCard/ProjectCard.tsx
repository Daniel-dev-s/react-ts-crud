import React from 'react';

import './ProjectCard.css';
import trashIcon from '../../assets/img/trashIcon.svg';
import editIcon from '../../assets/img/editIcon.svg';

import Project from '../../types/Project';

import { useDispatch } from 'react-redux';
import { actions as ProjectActions } from '../../store/project';
import { actions as ModalActions, ModalsKeys } from '../../store/modal';

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

    return <div className="project-card">
        <div className="project-card__header">
            <h3>{props.project.title}</h3>
            <div>
                <button onClick={editProjectClick}>
                    <img src={editIcon} alt="edit" />
                </button>
                <button onClick={removeProjectClick}>
                    <img src={trashIcon} alt="delete" />
                </button>
            </div>
        </div>
        <p>{props.project.description}</p>
    </div>;
}

export default ProjectCard;