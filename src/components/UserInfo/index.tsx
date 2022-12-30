import React from "react";
import { Container, NameText, Progress, UserPicture, LevelTag, BigHeadContainer } from "./styles";
import { IUserInfo } from "./types";

function UserInfo({nome, imagem, percentual, limiteXp, nivel}: IUserInfo) {
  return (
    <Container>
      {typeof imagem === 'string' ? <UserPicture src={imagem}/> : <BigHeadContainer>{imagem}</BigHeadContainer>}
      <div>
        <NameText>{nome}</NameText>
        {nivel && <LevelTag>Nível {nivel}</LevelTag>}
        <p>XP {Math.round((percentual * limiteXp) / 100)} / {limiteXp}</p>
        <Progress percentual={percentual}/>
      </div>
    </Container>
  )
}

export default UserInfo;
