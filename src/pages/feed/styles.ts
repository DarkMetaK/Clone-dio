import styled from "styled-components";
import { IColumn } from "./types";

export const Container = styled.main`
    width: 100%;
    margin: 24px auto;

    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125em;
    margin-bottom: 24px;
    line-height: 1.5em;

    color: #fff;
`

export const TitleProgram = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125em;
    margin-bottom: 24px;
    line-height: 1.5em;
    text-align: center;

    color: rgb(85,85,85);
`

export const AccountInfo = styled.div`
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        div {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: center;
        }
    }
`

export const Programs = styled.div`
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: stretch;

        div {
            justify-content: flex-start;
        }

        h3 {
            text-align: left;
        }
    }
`

export const TitleHighLight = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125em;
    margin-bottom: 24px;
    line-height: 1.5em;

    color: #fff;
`

export const Column = styled.div<IColumn>`
    flex: ${({flex}) => flex};
    padding: 0 12px;
`

export const UserPicture = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 17px;
    border: 3px solid #fff;
    margin-right: 12px;
`