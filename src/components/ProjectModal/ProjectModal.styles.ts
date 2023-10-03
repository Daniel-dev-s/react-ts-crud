import styled from "styled-components";

interface ModalWrapperProps {
    $visible: boolean;
}

export const StyledModalWrapper = styled.div<ModalWrapperProps>`
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: rgba(0,0,0,0.5);
    display: ${({ $visible }) => $visible ? 'flex' : 'none'};
    justify-content: center;
    align-items: flex-start;
    transition: 1s;
`;

export const StyledForm = styled.form`
    margin-top: 200px;
    background: white;
    padding: 30px 50px;
    border-radius: 6px;
    text-align: center;
    position: relative;
`;

export const StyledCloseModalButton = styled.button`
    border: none;
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: transparent;
`;

export const StyledCreateButton = styled.button`
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 6px;
    margin-top: 30px;
`;

export const FormTitle = styled.h3`
    margin: 0 0 20px;
`;

export const FormError = styled.small`
    display: block;
    color: red;
    margin-bottom: 1em;
`;

export const FormLabel = styled.label`
    display: block;
    margin-bottom: 5px;
`;

export const TextInput = styled.input.attrs(() => ({
    type: 'text'
}))`
    padding: 10px 5px;
    font-size: 16px;
    border-radius: 6px;
    margin-bottom: 10px;
`;