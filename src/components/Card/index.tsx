import { BigHead } from '@bigheads/core'
import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import { IPost } from '../../types/post'

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture, BigHeadContainer } from "./styles"

function Card({author, date, title, content, tags, likes}: IPost) {
  return (
    <CardContainer>
        <ImageBackground src='https://www.paragyte.com/img/React_Banner.png' alt='Imagem do post'/>
        <Content>
            <UserInfo>
                {author === 'Matheus Porto' ? 
                <UserPicture src='https://avatars.githubusercontent.com/u/77026784?v=4' alt='Imagem de perfil'/> : 
                <BigHeadContainer><BigHead /></BigHeadContainer>}
                <div>
                    <h4>{author}</h4>
                    <p>{date}</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>{title}</h4>
                <p>{content}<strong>Saiba mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>{tags && tags.map(tag => `#${tag} `)}</h4>
                <p>
                    <FiThumbsUp /> {likes}
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export default Card