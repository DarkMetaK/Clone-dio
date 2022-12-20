import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    background-color: #3B4651;
    position: relative;
    margin-bottom: 24px;
`

export const ImageBackground = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
`

export const UserInfo = styled.div`
    display: flex;
    margin-bottom: 12px;
    align-items: center;

    div {
        margin-left: 12px;
    }

    h4 {
        font-family: 'Open Sans',
        font-weight: 700;
        font-style: normal;
        font-size: 1.125em;
        line-height: 1.5em;
        color: #fff;
    }

    p {
        font-family: 'Open Sans',
        font-weight: 400;
        font-style: normal;
        font-size: 0.75em;
        line-height: 1.5em;
        color: #fff;
    }
`

export const UserPicture = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    border: 3px solid #fff;
`

export const PostInfo = styled.div`
    margin-bottom: 12px;

    h4 {
        font-family: 'Open Sans',
        font-weight: 700;
        font-style: normal;
        font-size: 1.125em;
        line-height: 1.5em;
        color: #fff;
    }

    p {
        font-family: 'Open Sans',
        font-weight: 400;
        font-style: normal;
        font-size: 0.75em;
        line-height: 1.5em;
    }
`

export const HasInfo = styled.div`
    margin-top: 12px;

    h4 {
        font-family: 'Open Sans',
        font-weight: 700;
        font-style: normal;
        font-size: 0.75em;
        line-height: 1.5em;
        color: rgb(85,85,85);
    }

    p {
        font-family: 'Open Sans',
        font-weight: 400;
        font-style: normal;
        font-size: 0.75em;
        line-height: 1.5em;
    }
`
