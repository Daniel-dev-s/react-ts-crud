import '../../assets/css/components/ProjectModal.css';
import crossIcon from '../../assets/img/crossIcon.svg';

import React, { useState, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getModalsStateSelector, ModalState, ModalsKeys, actions as ModalActions } from '../../store/modal';
import { getEditingProjectSelector, actions as ProjectActions } from '../../store/project';

const EditProjectModal: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const modalsState = useSelector(getModalsStateSelector);
  const project = useSelector(getEditingProjectSelector);

  if (project == null) {
    return <></>;
  }

  let containerClasses = ['modal-container'];
  let visible = false;

  modalsState.forEach((modal: ModalState): void => {
    if (modal.key === ModalsKeys.EDIT_MODAL) {
      visible = modal.visible;
    }
  });

  if (visible) {
    containerClasses.push('visible');
  }

  const saveButtonClick = (): void => {
    if (project == null) {
      return;
    }

    dispatch(ProjectActions.saveProject({
      project: {
        id: project.id,
        title: titleRef.current?.value ?? '',
        description: descriptionRef.current?.value ?? ''
      }
    }));

    closeModal();
  };

  const titleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const descriptionOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDescription(e.target.value);
  }

  const closeModal = (): void => {
    titleRef.current!.value = '';
    descriptionRef.current!.value = '';
    
    setTitle('');
    setDescription('');

    dispatch(ModalActions.setModalVisibility({
      key: ModalsKeys.EDIT_MODAL,
      visible: false
    }));
  }

  return <div className={containerClasses.join(' ')}>
    <form>
      <button className='close-modal' onClick={closeModal} type='button'>
        <img src={crossIcon} alt='close' />
      </button>
      <h3>Редактирование проекта</h3>
      <div>
        <label htmlFor='title'>Заголовок</label>
        <input type='text' id='title' onChange={titleOnChange} ref={titleRef} value={title.length ? title : project.title} />
      </div>
      <div>
        <label htmlFor='description'>Описание</label>
        <input type='text' id='description' onChange={descriptionOnChange} ref={descriptionRef} value={description.length ? description : project.description} />
      </div>
      <button type="button" className='create-button' onClick={saveButtonClick}>Сохранить</button>
    </form>
  </div>
}

export default EditProjectModal;