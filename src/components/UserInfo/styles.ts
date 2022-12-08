import styled from "styled-components";
import { IProgress } from "./types";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 17px;
    border: 3px solid #fff;
    margin-right: 12px;
`

export const NameText = styled.div`
    font-family: 'Open Sans',
    font-weight: 700;
    font-style: normal;
    font-size: 1.125em;
    line-height: 1.5em;
    color: #fff;
`

export const Progress = styled.div<IProgress>`
    width: 180px;
    height: 6px;
    background-color: #fff;
    border-radius: 3px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual}) => percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23DD7A;
    }
`