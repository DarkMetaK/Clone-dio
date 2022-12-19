import styled from "styled-components";

export const Container = styled.main`
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

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
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

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 2em;
    margin-bottom: 10px;
    margin-left: 0;
    line-height: 1.3em;

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

export const EsqueciText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: .875em;
    line-height: 1.3em;
    cursor: pointer;

    color: #e5e044;

    &:hover {
        text-decoration: underline;
    }
`

export const CriarText = styled.button`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: .875em;
    color: #E23DD7;

    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`