import React from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import UserInfo from '../../components/UserInfo';

import { AccountInfo, Column, Container, Programs, Title, TitleHighLight, TitleProgram } from './styles';
import CourseProgram from '../../components/CourseProgram';

function Feed() {
  return (
    <>
      <Header />
      <Container>

        <Column flex={1}>
          <AccountInfo>
            <Title>Minha conta</Title>
            <UserInfo
              limiteXp={9557}
              percentual={60} 
              nome="Matheus Porto" 
              imagem="https://avatars.githubusercontent.com/u/77026784?v=4"
              nivel={11}
            />
          </AccountInfo>
          
          <Programs>
            <TitleProgram>Meus Programas</TitleProgram>
            <CourseProgram
              image='https://hermes.digitalinnovation.one/tracks/68c81887-a1c2-440d-a7ea-7777bc10cd41.png'
              title='Formação React Developer'
            />
            <CourseProgram
              image='https://hermes.digitalinnovation.one/tracks/225effc3-a4c4-44e9-ba7f-53caaaffbcec.png'
              title='Formação TypeScript FullStack Developer'
            />
            <CourseProgram
              image='https://hermes.digitalinnovation.one/tracks/0b5c4809-2339-47e7-b9df-56359e44ac1a.png'
              title='Formação UX Designer'
            />
          </Programs>
        </Column>

        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <AccountInfo>
            <TitleHighLight>
              #RANKING DA SEMANA
            </TitleHighLight>
            <UserInfo
              limiteXp={3920}
              percentual={95} 
              nome="Matheus Porto" 
              imagem="https://avatars.githubusercontent.com/u/77026784?v=4"
            />
            <UserInfo
              limiteXp={3920}
              percentual={80} 
              nome="Matheus Porto" 
              imagem="https://avatars.githubusercontent.com/u/77026784?v=4"
            />
            <UserInfo
              limiteXp={3920}
              percentual={75} 
              nome="Matheus Porto" 
              imagem="https://avatars.githubusercontent.com/u/77026784?v=4"
            />
            <UserInfo
              limiteXp={3920}
              percentual={40} 
              nome="Matheus Porto" 
              imagem="https://avatars.githubusercontent.com/u/77026784?v=4"
            />
            <UserInfo
              limiteXp={3920}
              percentual={25} 
              nome="Matheus Porto" 
              imagem="https://avatars.githubusercontent.com/u/77026784?v=4"
            />
          </AccountInfo>
        </Column>
      </Container>
    </>
  );
}

export default Feed;
