import '../../assets/css/components/ProjectModal.css';
import { useState, useRef } from 'react';
import crossIcon from '../../assets/img/crossIcon.svg';
import React from 'react';
import Project from '../../types/Project';

interface ProjectModalProps {
    isVisible: boolean;
    closeFunction: () => void;
    saveProjectFunction: (project: Project) => void;
    project: Project | null;
}
  
const EditProjectModal: React.FC<ProjectModalProps> = (props) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);

    if (props.project == null) {
        return <></>;
    }

    let containerClasses = ['modal-container'];

    if (props.isVisible) {
        containerClasses.push('visible');
    }

    const saveButtonClick = (): void => {
        if (props.project == null) {
            return;
        }
        
        props.saveProjectFunction({id: props.project.id, title: titleRef.current?.value ?? '', description: descriptionRef.current?.value ?? ''});
        closeModal();
    };

    const titleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value);
    };

    const descriptionOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setDescription(e.target.value);
    }

    const closeModal = (): void  => {
        titleRef.current!.value = '';
        descriptionRef.current!.value = '';
        setTitle('');
        setDescription('');
        props.closeFunction();
    }

    return <div className={containerClasses.join(' ')}>
        <form>
            <button className='close-modal' onClick={closeModal} type='button'>
                <img src={crossIcon} alt='close' />
            </button>
            <h3>Редактирование проекта</h3>
            <div>
                <label htmlFor='title'>Заголовок</label>
                <input type='text' id='title' onChange={titleOnChange} ref={titleRef} value={title.length ? title : props.project.title}/>
            </div>
            <div>
                <label htmlFor='description'>Описание</label>
                <input type='text' id='description' onChange={descriptionOnChange} ref={descriptionRef} value={description.length ? description : props.project.description}/>
            </div>
            <button type="button" className='create-button' onClick={saveButtonClick}>Сохранить</button>
        </form>
    </div>
}

export default EditProjectModal;