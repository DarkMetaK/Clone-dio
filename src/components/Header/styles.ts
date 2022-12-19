import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    padding: 10px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
`

export const ButtonHamburguer = styled.button`
    color: white;
    background: none;
    border: 0;
    cursor: pointer;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.header`
    background-color: #151515;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BuscarInputContainer = styled.div`
    max-width: 175px;
    width: 100%;
    height: 36px;
    background: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Menu = styled.a`
    font-family: 'Open Sans',
    font-style: normal;
    font-size: 1.125em;
    line-height: 1.5em;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
`

export const MenuRight = styled.a`
    display: flex;
    gap: 10px;
    align-items: center;
    
    a, span {
        font-family: 'Open Sans',
        font-style: normal;
        font-size: 1em;
        line-height: 1.5em;
        color: #fff;
        margin-right: 12px;
        text-decoration: none;
        white-space: nowrap;
        cursor: pointer;
        
        transition: color 0.2s ease-out 0s;

        &:hover{
            color: #E4105D;
        }
    }
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 17px;
    border: 2px solid #fff;
    margin-right: 10px;
`

export const Input = styled.input`
    background: transparent;
    flex: 1;
    border: none;
    color: #fff
`