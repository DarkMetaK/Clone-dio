import styled from "styled-components";
import { IProgress } from "./types";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
    align-items: center;
`

export const UserPicture = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    border: 3px solid #fff;
    margin-right: 12px;
`

export const BigHeadContainer = styled.span`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    border: 3px solid #fff;
    margin-right: 12px;
    background-color: #85C5E5;
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
    max-width: 180px;
    width: 100%;
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
export const LevelTag = styled.span`
    font-size: 0.75em;
    color: white;
    background-color: #23DD7A;
    padding: 2px 5px;
    border-radius: 10px;
    display: inline;
`