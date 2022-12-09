import { Link, useNavigate } from 'react-router-dom';

import Button from '../Button';

import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper } from "./styles";

import logo from '../../assets/logo-dio.png';

import React from 'react';
import { useAuth } from '../../hooks/userAuth';

function Header() {

  const { user, handleSignOut } = useAuth();

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to='/'>
            <img src={logo} alt="Logo da dio" />
          </Link>
          {user.id ? (
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
          {user.id ? (
            <>
            <Link to='/feed'>
              <UserPicture src='https://avatars.githubusercontent.com/u/77026784?v=4' />
            </Link>
            <Link to='/' onClick={handleSignOut}>Sair</Link>
            </>
          ) : (
            <>
            <MenuRight><Link to='/'>Home</Link></MenuRight>
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