import React from "react";
import { Container, NameText, Progress, UserPicture, LevelTag } from "./styles";
import { IUserInfo } from "./types";

function UserInfo({nome, imagem, percentual, limiteXp, nivel}: IUserInfo) {
  return (
    <Container>
      <UserPicture src={imagem}/>
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
