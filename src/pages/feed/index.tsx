import React from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import UserInfo from '../../components/UserInfo';

import { Column, Container, Title, TitleHighLight } from './styles';

function Feed() {
  return (
    <>
      <Header />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighLight>
            # RANKING TOP 5 DA SEMANA
          </TitleHighLight>
          <UserInfo percentual={35} nome="Matheus Porto" imagem="https://avatars.githubusercontent.com/u/77026784?v=4"/>
          <UserInfo percentual={75} nome="Matheus Porto" imagem="https://avatars.githubusercontent.com/u/77026784?v=4"/>
          <UserInfo percentual={50} nome="Matheus Porto" imagem="https://avatars.githubusercontent.com/u/77026784?v=4"/>
          <UserInfo percentual={23} nome="Matheus Porto" imagem="https://avatars.githubusercontent.com/u/77026784?v=4"/>
          <UserInfo percentual={66} nome="Matheus Porto" imagem="https://avatars.githubusercontent.com/u/77026784?v=4"/>
        </Column>
      </Container>
    </>
  );
}

export default Feed;
