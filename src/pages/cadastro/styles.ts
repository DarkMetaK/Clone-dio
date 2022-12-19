import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    margin: 120px auto 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
        margin: 24px auto;
        align-items: flex-start;
    }

    @media (max-width: 577px) {
        align-items: center;
    }
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

    @media (max-width: 768px) {
        font-size: 1.5em;
        max-width: 100%
    }
    @media (max-width: 577px) {
        display: none;
    }
`

export const Wrapper = styled.div`
    max-width: 300px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 577px) {
        max-width: 100%;
    }
`

export const Column = styled.div`
    flex: 1;
    @media (max-width: 577px) {
        width: 100%;
    }
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1.5em;
    margin-bottom: 10px;
    line-height: 1.3em;
    margin-left: 0 px;

    @media (max-width: 768px) {
        margin-top: 24px;
    }
`

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875em;
    margin-bottom: 35px;
    line-height: 1.3em;
    color: #ffffff80;
`

export const Consentimento = styled.div`
    margin-top: 20px;
`

export const ConsentimentoText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875em;
    margin-bottom: 35px;
    line-height: 1.3em;
`

export const HighLight = styled.button`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1em;

    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    margin-left: 5px;
    color: #e5e044;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`