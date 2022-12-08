import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Header from '../../components/Header'
import Input from '../../components/Input'

import { Column, Consentimento, ConsentimentoText, Container, HighLight, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles'
import Button from '../../components/Button';

function Cadastro() {

  const schema = yup.object({
    name: yup.string().required('Esse campo é obrigatório'),
    email: yup.string().email('E-mail inválido').required('Esse campo é obrigatório'),
    password: yup.string().min(3, 'A senha deve possuir ao menos 3 caracteres').required('Esse campo é obrigatório')
  })

  const {control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  async function onSubmit(data) {
    console.log(data)
  }

  const navigate = useNavigate();

  function handleClick() {
    navigate('/login');
  }

  return (
    <>
    <Header />
    <Container>
      <Column>
        <Title>A plataforma para você aprender com os experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
      </Column>
      
      <Column>
        <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                name='name'
                placeholder='Nome Completo'
                control={control}
                errorMessage={errors.name ? errors.name.message : null}
                leftIcon={<MdPerson />}
                />
                <Input
                type='email'
                name='email'
                placeholder='E-mail'
                control={control}
                errorMessage={errors.email ? errors.email.message : null}
                leftIcon={<MdEmail />}
                />
                <Input
                type='password'
                name='password'
                placeholder='Senha'
                control={control}
                errorMessage={errors.password ? errors.password.message : null}
                leftIcon={<MdLock />}
                />
                <Button
                    title='Criar minha conta'
                    variant='secondary'
                />
            </form>
            <Consentimento>
              <SubtitleLogin>Ao clicar em "criar minha conta", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO</SubtitleLogin>
              <ConsentimentoText>
                Já tenho conta.
                <HighLight onClick={handleClick}>
                    Fazer login
                </HighLight>
              </ConsentimentoText>            
            </Consentimento>

        </Wrapper>
      </Column>
      
    </Container>
    </>
  )
}

export default Cadastro