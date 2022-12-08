import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 120px auto 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 2em;
    max-width: 320px;
    width: 100%;
    margin-bottom: 20px;
    line-height: 1.3em;

    color: #fff;
`

export const TitleHighLight = styled.span`
    color: #E4105D;
`

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1em;
    max-width: 420px;
    width: 100%;
    margin-bottom: 20px;
    line-height: 1.5em;

    color: #fff;
`