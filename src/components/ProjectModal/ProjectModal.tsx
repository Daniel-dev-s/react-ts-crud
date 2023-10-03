import crossIcon from '../../assets/img/crossIcon.svg';

import React from 'react';

import { Form, Field } from 'react-final-form';
import { ValidationErrors } from 'final-form';

import * as Yup from 'yup';

import { useTranslation } from 'react-i18next';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { actions as ModalActions, getModalsStateSelector } from '../../store/modal';
import { actions as ProjectActions } from '../../store/project';

import ProjectInput from '../../types/ProjectInput';

import { StyledForm, StyledModalWrapper, StyledCloseModalButton, StyledCreateButton, FormTitle, FormError, TextInput, FormLabel } from './ProjectModal.styles';

const AddProjectModal: React.FC = () => {
    const dispatch = useDispatch();
    const modalState = useSelector(getModalsStateSelector);

    const { t } = useTranslation();

    const closeButtonClick = (): void => {
        dispatch(ModalActions.setModalVisibility({
            visible: false,
        }));
    }

    const onFormSubmit = (project: ProjectInput): void => {
        if (modalState.project) {
            dispatch(ProjectActions.saveProject({
                project: { id: modalState.project.id, ...project }
            }));
        } else {
            dispatch(ProjectActions.addProject({
                project: { id: Date.now(), ...project }
            }));
        }
        console.log('?');
        closeButtonClick();
    }

    const validationSchema: Yup.Schema<ProjectInput> = Yup.object().shape({
        title: Yup.string().required(t('validation.required.title')),
        description: Yup.string().required(t('validation.required.description'))
    });

    const header = modalState.project
        ? t('project.labels.edit_project')
        : t('project.labels.create_project');

    const saveButtonLabel = modalState.project
        ? t('save')
        : t('create');

    const validate = (
        values: ProjectInput
    ): Promise<ValidationErrors | undefined> =>
        validationSchema
            .validate(values, { abortEarly: false })
            .then(() => undefined)
            .catch((error: Yup.ValidationError) => {
                const errors: { [value: string]: string } = {};
                error.inner.forEach((e) => {
                    if (e.path) {
                        errors[e.path] = e.message;
                    }
                });
                return errors;
            });

    return <StyledModalWrapper $visible={modalState.visible}>
        <Form
            onSubmit={onFormSubmit}
            validate={validate}
            initialValues={{ title: modalState?.project?.title ?? '', description: modalState?.project?.description ?? '' }}
        >
            {({
                handleSubmit,
                errors,
                submitting,
                invalid,
            }) => (
                <StyledForm onSubmit={handleSubmit}>
                    <FormTitle>{header}</FormTitle>
                    <StyledCloseModalButton onClick={closeButtonClick} type='button'>
                        <img src={crossIcon} alt='close' />
                    </StyledCloseModalButton>
                    <Field name="title">
                        {({ input }) => (
                            <div>
                                <FormLabel>{t('project.labels.title')}</FormLabel>
                                <TextInput {...input} />
                                <FormError>{errors?.title}</FormError>
                            </div>
                        )}
                    </Field>

                    <Field name="description">
                        {({ input }) => (
                            <div>
                                <FormLabel>{t('project.labels.description')}</FormLabel>
                                <TextInput {...input} />
                                <FormError>{errors?.description}</FormError>
                            </div>
                        )}
                    </Field>

                    <StyledCreateButton type="submit" disabled={submitting || invalid}>
                        {saveButtonLabel}
                    </StyledCreateButton>
                </StyledForm>
            )}
        </Form>
    </StyledModalWrapper>
}

export default AddProjectModal;