import styled from "styled-components";
import { IInputStyled } from "./types";

export const GeneralContainer = styled.div`
    margin-bottom: 20px;
`

export const InputContainer = styled.div<IInputStyled>`
    max-width: ${({widthVariant}) => widthVariant ? widthVariant : '275px'};
    width: 100%;
    border-bottom: 1px solid #3B3450;

    display: flex;
    align-items: center;
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #fff;
    width: 100%;
    border: none;
    height: 30px;
`

export const ErrorText = styled.p`
    color: #FF0000;
    font-size: .75em;
`