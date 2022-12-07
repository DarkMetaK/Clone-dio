import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 120px auto 0 auto;

    display: flex;
    justify-content: space-between;
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

export const TitleHighLight = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125em;
    margin-bottom: 24px;
    line-height: 1.5em;

    color: #fff;
`

export const Column = styled.div`
    flex: ${({flex}) => flex};
    padding-right: 24px;
`