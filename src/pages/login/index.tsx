import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from '../../services/api'
import * as yup from "yup"

import { Container, TitleLogin, Title, SubtitleLogin, EsqueciText, CriarText, Column, Row, Wrapper } from './styles'
import { IFormData } from "./types"
import React from "react"

const schema = yup
  .object({
    Email: yup.string().email('Email inválido').required('Campo obrigatório'),
    Password: yup.string().min(5, '5 caracteres no mínimo').required('Campo obrigatório'),
  })
  .required()

const Login = () => {

    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
      });

    const onSubmit = async (formData : IFormData) => {
        try{
            const { data } = await api.get(`users?email=${formData.Email}&senha=${formData.Password}`)
            
            if(data.length === 1){
                navigate('/feed');
            }else{
                alert("Dados incorretos");
            }
        }catch{
            alert("Houve um erro. Tente novamente mais tarde");
        }
    }

    const navigate = useNavigate();

    return (
        <>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias 
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>

            <Column>
                <Wrapper>
                    <TitleLogin> Faça o seu cadastro </TitleLogin>
                    <SubtitleLogin> Faça seu login e make the change._ </SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="Email" errorMessage={errors?.Email?.message} control={control} placeholder="Email" leftIcon={<HiOutlineMail />} />
                        <Input name="Password" errorMessage={errors?.Password?.message} control={control} placeholder="Senha" type="password" leftIcon={<HiOutlineLockClosed />} />
                        <Button title="Entrar" variant="secondary" type='submit' />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
        </>
    )
}

export { Login }