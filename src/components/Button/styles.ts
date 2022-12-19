import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
    background: rgb(86, 86, 86);
    border-radius: 2rem;
    position: relative;

    color: rgb(255, 255, 255);
    padding: 0.5rem 1.5rem;
    margin: 0px 0.5rem;
    min-width: 120px;
    width: 100%;
    cursor: pointer;
    
    transition: background-color 0.2s ease-out 0s;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
        background: #E4105D;
    }

    &:disabled {
        background: rgb(86, 86, 86);
        filter: brightness(.6);
    }

    ${({variant}) => variant === 'secondary' && css`
        background: #E4105D;

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -6px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }

        &:hover {
            box-shadow: 1px 1px 50px 2px #E4105D;
        }

        &:disabled {
            &::after {
                border: 1px solid rgb(85, 85, 85)
            }
            &:hover {
                box-shadow: none;
            }
        }
    `}

    ${({variant}) => variant === 'empty-purple' && css`
        background: transparent;
        border: 2px solid rgb(134, 71, 173);

        &:hover{
            background-color:transparent
        }
    `}

    ${({variant}) => variant === 'purple' && css`
        background: rgb(134, 71, 173);
        border: none;

        &:hover{
            background-color:rgb(134, 71, 173);
        }
    `}
`