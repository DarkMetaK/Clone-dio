import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: between;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 10px;
    margin-bottom: 10px;

    &:hover{
        background: rgb(85,85,85)
    }
`

export const ImageContainer = styled.img`
    width: 32px;
    height: 32px;
`

export const CourseName = styled.h5`
    font-size: 1em;
`