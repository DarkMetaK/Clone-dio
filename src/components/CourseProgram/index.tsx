import React from 'react'
import { Container, CourseName, ImageContainer } from './styles'
import { ICourse } from './types'

function CourseProgram({image, title}: ICourse) {
  return (
    <Container>
      <ImageContainer
        src={image}
        alt='Imagem do curso'
      />
      <CourseName>{title}</CourseName>
    </Container>
  )
}

export default CourseProgram