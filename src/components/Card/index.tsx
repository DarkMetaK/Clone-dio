import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from "./styles"

function Card() {
  return (
    <CardContainer>
        <ImageBackground src='https://www.paragyte.com/img/React_Banner.png' alt='Imagem do post'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/77026784?v=4' alt='Imagem de perfil'/>
                <div>
                    <h4>Matheus Porto</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de React</h4>
                <p>Projeto feito para o curso de React do bootcamp, e aprimorado posteriormente por meio de... <strong>Saiba mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp /> 16
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export default Card