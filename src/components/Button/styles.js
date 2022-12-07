import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
    background: #5656;
    border-radius: 22px;
    position: relative;

    color: #fff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }

    ${({variant}) => variant !== 'primary' && css`
        min-width: 160px;
        height: 32px;

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
    `}
`