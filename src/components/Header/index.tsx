import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../Button';
import { useAuth } from '../../hooks/userAuth';

import { BuscarInputContainer, Container, MenuRight, Row, UserPicture, Wrapper } from "./styles";
import HeaderHamburguer from './HeaderHamburguer';

function Header() {

  const { user, handleSignOut } = useAuth();
  const [screenSize, getDimension] = useState(window.innerWidth)

  const setDimension = () => {
    getDimension(window.innerWidth)
  }
  
  useEffect(() => {
    window.addEventListener('resize', setDimension)

    return(() => {
      window.removeEventListener('resize', setDimension)
    })
  }, [screenSize])

  const navigate = useNavigate();

  return (
    <>
    {screenSize > 992 ? (
      <Wrapper>
      <Container>
        <Row>
          <Link to='/'>
            <img src='https://hermes.digitalinnovation.one/assets/diome/logo.svg' alt="Logo da dio" width={150}/>
          </Link>
          {user.id ? (
            <>
            <BuscarInputContainer
              type="text"
              placeholder='Pesquisar...'
            />
            <MenuRight>
              <span>Play</span>
              <span>Global</span>
              <span>English4Tech</span>
              <span>Artigos</span>
              <span>Rooms</span>
            </MenuRight>
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
            <MenuRight>
              <Link to='/'>Home</Link>
              <span>Catálogo</span>
              <span>Planos</span>
              <span>Para Empresas</span>
            </MenuRight>
            <Button title="Entrar" onClick={() => navigate('/login')}/>
            <Button title="Cadastrar" onClick={() => navigate('/cadastro')}/>
            </>
          )}
        </Row>
      </Container>
      </Wrapper>
    ) : <HeaderHamburguer />}
    </>
  )
}

export default Header