import React from 'react';
import '../../assets/css/components/ProjectCard.css';
import trashIcon from '../../assets/img/trashIcon.svg';
import editIcon from '../../assets/img/editIcon.svg';
import Project from '../../types/Project';

interface ProjectCardProps {
    project: Project;
    removeProject: (id: number) => void;
    beginEditingProject: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    return <div className="project-card">
        <div className="project-card__header">
            <h3>{props.project.title}</h3>
            <div>
                <button onClick={props.beginEditingProject}>
                    <img src={editIcon} alt="edit" />
                </button>
                <button onClick={() => props.removeProject(props.project.id)}>
                    <img src={trashIcon} alt="delete" />
                </button>
            </div>
        </div>
        <p>{props.project.description}</p>
    </div>;
}

export default ProjectCard;