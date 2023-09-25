import '../../assets/css/components/ProjectModal.css';
import { useRef } from 'react';
import crossIcon from '../../assets/img/crossIcon.svg';
import React from 'react';
import Project from '../../types/Project';

interface ProjectModalProps {
    isVisible: boolean;
    closeFunction: () => void;
    addProjectFunction: (project: Project) => void;
}
  
const AddProjectModal: React.FC<ProjectModalProps> = (props) => {
    const titleRef = useRef<HTMLInputElement | null>(null);
    const descriptionRef = useRef<HTMLInputElement | null>(null);
    let containerClasses = ['modal-container'];

    if (props.isVisible) {
        containerClasses.push('visible');
    }

    const createButtonClick = () => {
        let title:string = titleRef.current?.value ?? '';
        let description:string = descriptionRef.current?.value ?? '';
        props.addProjectFunction({id:0, title: title, description: description});
        titleRef.current!.value = '';
        descriptionRef.current!.value = '';
        props.closeFunction();
    };

    return <div className={containerClasses.join(' ')}>
        <form>
            <button className='close-modal' onClick={() => {props.closeFunction()}} type='button'>
                <img src={crossIcon} alt='close' />
            </button>
            <h3>Создание проекта</h3>
            <div>
                <label htmlFor='title'>Заголовок</label>
                <input type='text' id='title' ref={titleRef}/>
            </div>
            <div>
                <label htmlFor='title'>Описание</label>
                <input type='text' id='title' ref={descriptionRef}/>
            </div>
            <button type="button" className='create-button' onClick={createButtonClick}>Создать</button>
        </form>
    </div>
}

export default AddProjectModal;