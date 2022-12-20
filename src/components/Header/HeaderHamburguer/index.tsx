import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import {
  Cross2Icon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';

import Button from '../../Button';
import { useAuth } from '../../../hooks/userAuth';

import { ButtonHamburguer, Container, Wrapper, Row } from "../styles";
import './styles.css';

function HeaderHamburguer() {

  const { user, handleSignOut } = useAuth();

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to='/'>
            <img src='https://hermes.digitalinnovation.one/assets/diome/logo.svg' alt="Logo da dio" width={150}/>
          </Link>
        </Row>
        <Row>
          <Dialog.Root>

            <Dialog.Trigger asChild>
              <ButtonHamburguer>
                <HamburgerMenuIcon width={24} height={24}/>
              </ButtonHamburguer>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className='overlay'/>
              <Dialog.Content className='Dialog-body'>

                <img src='https://hermes.digitalinnovation.one/assets/diome/logo.svg' alt="Logo da dio" width={250}/>

                <ul className='options'>

                  {user.id? (
                    <>
                    <li><Link to='/feed'>Play</Link></li>
                    <li>Global</li>
                    <li>English4Tech</li>
                    <li>Artigos</li>
                    <li>Rooms</li>
                    </>
                  )
                  : (
                  <>
                  <li><Link to='/'>Home</Link></li>
                  <li>Catálogo</li>
                  <li>Planos</li>
                  <li>Para Empresas</li>
                  </>
                  )}
                </ul>
                
                {user.id? (
                  <div className='buttons'>
                    <Button title="Sair" onClick={() => {
                      navigate('/')
                      handleSignOut()
                    }} variant='purple'/>
                  </div>
                ) 
                : (
                  <div className='buttons'>
                    <Button title="Cadastrar" onClick={() => navigate('/cadastro')} variant='empty-purple'/>
                    <Button title="Entrar" onClick={() => navigate('/login')} variant='purple'/>
                  </div>
                )}
                
                <Dialog.Close asChild>
                  <ButtonHamburguer className='closeButton'>
                    <Cross2Icon width={24} height={24}/>
                  </ButtonHamburguer>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>

          </Dialog.Root>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default HeaderHamburguer