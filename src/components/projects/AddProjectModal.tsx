import '../../assets/css/components/ProjectModal.css';
import crossIcon from '../../assets/img/crossIcon.svg';

import React, {useRef} from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { ModalState, ModalsKeys, actions as ModalActions, getModalsStateSelector } from '../../store/modal';
import { actions as ProjectActions } from '../../store/project';
  
const AddProjectModal: React.FC = () => {
    const dispatch = useDispatch();
    const modalsState = useSelector(getModalsStateSelector);

    const titleRef = useRef<HTMLInputElement | null>(null);
    const descriptionRef = useRef<HTMLInputElement | null>(null);
    let containerClasses = ['modal-container'];

    let visible = false;
    modalsState.forEach((modal: ModalState): void => {
        if (modal.key === ModalsKeys.CREATE_MODAL) {
            visible = modal.visible;
        }
    });

    if (visible) {
        containerClasses.push('visible');
    }

    const createButtonClick = (): void => {
        let title:string = titleRef.current?.value ?? '';
        let description:string = descriptionRef.current?.value ?? '';

        dispatch(ProjectActions.addProject({
            project: {id: Date.now(), title: title, description: description}
        }));

        titleRef.current!.value = '';
        descriptionRef.current!.value = '';

        closeButtonClick();
    };

    const closeButtonClick = (): void => {
        dispatch(ModalActions.setModalVisibility({
            key: ModalsKeys.CREATE_MODAL,
            visible: false,
        }));
    }

    return <div className={containerClasses.join(' ')}>
        <form>
            <button className='close-modal' onClick={closeButtonClick} type='button'>
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