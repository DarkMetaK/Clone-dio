import { useNavigate } from 'react-router-dom';

import Button from '../Button';

import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper } from "./styles";

import logo from '../../assets/logo-dio.png';

import { IHeader } from './types';
import React from 'react';

function Header({autenticado} : IHeader) {

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          {autenticado ? (
            <>
            <BuscarInputContainer>
              <Input type="text" placeholder='Buscar...'/>
            </BuscarInputContainer>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src='https://avatars.githubusercontent.com/u/77026784?v=4' />
          ) : (
            <>
            <MenuRight href="/">Home</MenuRight>
            <Button title="Entrar" onClick={() => navigate('/login')}/>
            <Button title="Cadastrar" onClick={() => navigate('/cadastro')}/>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Header