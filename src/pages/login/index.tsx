import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '../../components/Button'
import Header from '../../components/Header'
import Input from '../../components/Input';
import { api } from '../../services/api';

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';

import { FormDat } from './types';

function Login() {

  const schema = yup.object({
    email: yup.string().email('E-mail inválido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório')
  }).required();

  const { control, handleSubmit, formState: {errors} } = useForm<FormDat>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const navigate = useNavigate();

  const onSubmit = async (formData: FormDat) => {
    try{
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
      if(data.length === 1) {
        navigate('/feed');
      } else {
        alert('E-mail ou senha inválido')
      }
    } catch(error) {
      alert('Houve algum erro!');
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
        <Wrapper>
          <TitleLogin>Faça seu Login</TitleLogin>
          <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              control={control}
              name='email'
              placeholder='E-mail'
              type='email'
              leftIcon={<MdEmail />}
              errorMessage={errors.email ? errors.email.message : null}
            />
            <Input
              control={control}
              name='password'
              placeholder='Senha'
              type='password'
              leftIcon={<MdLock />}
              errorMessage={errors.password ? errors.password.message : null}
            />
            <Button
              title='Entrar'
              variant='secondary'
              // onClick={handleClickSignIn}
              />
          </form>
          <Row>
            <EsqueciText>Esqueci minha senha</EsqueciText>
            <CriarText onClick={() => navigate('/cadastro')}>Criar conta</CriarText>
          </Row>
        </Wrapper>
        </Column>
      </Container>
    </>
  );
}

export default Login;
