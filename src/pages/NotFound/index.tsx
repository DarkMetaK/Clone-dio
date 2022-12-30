import React from 'react'
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';

import { Container } from './styles';

function NotFound() {

  const navigate = useNavigate();

  return (
    <>
    <Header />
    <Container>
      <h1>Página não encontrada</h1>
      <Button title='Retornar ao início' onClick={() => navigate('/')}/>
    </Container>
    </>
  )
}

export default NotFound;