import styled from "styled-components";

const StyledProjectCard = styled.div`
    width: 30%;
    height: 150px;
    border: 1px solid #7b8891;
    border-radius: 6px;
    background-color: white;
    padding: 20px 10px 10px 15px;
    overflow: hidden;
`;

const ProjectCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const HeaderButton = styled.button`
    border: none;
    background-color: transparent;
    opacity: .65;
    &:hover {
        opacity: 1;
    }
`;

const Title = styled.h3`
    margin: 0;
`;

export {StyledProjectCard, ProjectCardHeader, HeaderButton, Title};