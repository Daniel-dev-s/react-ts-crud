import styled from "styled-components";

export const PageWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`;

export const StyledHeader = styled.div`
    background-color: #9b77ff;
    padding: 50px 25px 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h1`
    color: white;
`;

export const StyledProjectsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: -75px;
    padding: 0 25px;
`;

export const StyledCreateProjectButton = styled.button`
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    background-color: white;
    font-weight: bold;
    font-size: 16px;
    color: #354c55;
    transition: .6s;
    &:hover {
        background-color: #354c55;
        color: white;
    }
`;