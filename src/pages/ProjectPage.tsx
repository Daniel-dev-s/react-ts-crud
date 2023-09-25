import '../assets/css/pages/ProjectPage.css';
import ProjectCard from '../components/projects/ProjectCard';
import AddProjectModal from '../components/projects/AddProjectModal';
import EditProjectModal from '../components/projects/EditProjectModal';
import {useState} from 'react';
import React from 'react';
import Project from '../types/Project';

const ProjectPage:React.FC = () => {
  const [createModalOpened, setCreateModalOpened] = useState<boolean>(false);
  const [editModalOpened, setEditModalOpened] = useState<boolean>(false);
  const [activeEditProject, setEditProject] = useState<Project|null>(null);
  const PROJECTS_KEY = 'projects';

  const getProjects = (): Project[] => {
    const saved = localStorage.getItem(PROJECTS_KEY);
    if (saved) {
      return JSON.parse(saved);
    }

    return [];
  }
  const [projects, setProjects] = useState<Project[]>(getProjects());

  const addProject = (project: Project): void => {
    let buffer = projects;
    project.id = buffer.length;
    buffer.push(project);
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(buffer));
    setProjects(buffer);
  };

  const editProject = (project: Project): void => {
    let buffer = projects;
    buffer.forEach((iteratingProject: Project) => {
      if (iteratingProject.id === project.id) {
        iteratingProject.title = project.title;
        iteratingProject.description = project.description;
      }
    });
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(buffer));
    setProjects(buffer);
  }

  const removeProject = (id: number): void => {
    let buffer = projects;
    buffer = buffer.filter((project: Project) => project.id != id);
    buffer.map((project: Project, i: number) => project.id = i);
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(buffer));
    setProjects(buffer);
  };

  return (
    <>
    <div className="page">
      <div className="header">
        <h1>Проекты</h1>
        <button onClick={() => {setCreateModalOpened(true)}} className="create-project-button">Создать новый</button>
      </div>
      <div className="projects-container">
        {
          projects.map((project: Project, index: number): React.ReactElement => 
          <ProjectCard 
            key={index} 
            project={project} 
            removeProject={removeProject}
            beginEditingProject={() => {
              setEditModalOpened(true);
              setEditProject(project);
            }}
          />
          )
        }
      </div>
    </div>
    <AddProjectModal 
      isVisible={createModalOpened} 
      closeFunction={() => {setCreateModalOpened(false)}}
      addProjectFunction={addProject}
    />
    <EditProjectModal 
      isVisible={editModalOpened} 
      closeFunction={() => {setEditModalOpened(false)}}
      saveProjectFunction={editProject}
      project={activeEditProject}
    />
    </>
  );
}

export default ProjectPage;
