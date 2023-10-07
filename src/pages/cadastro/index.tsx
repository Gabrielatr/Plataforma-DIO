import React from 'react';
import { Header } from '../../components/Header';
import { MainText, TitleText, BodyText, HighlightMiniText, MiniText } from './styles';
import { Input } from '../../components/Input';
import { FiLock, FiUser, FiMail } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import {registerUser } from '../../services/api';
import { IFormData } from './types';



const schema = yup
  .object({
    nome: yup.string().required('Campo obrigatório')
             .matches(/^[aA-zZ\s]+$/, "Somente letras são permitidas no campo"),
    Email: yup.string().email('Email inválido').required('Campo obrigatório'),
    Password: yup.string().min(5, '5 caracteres no mínimo').required('Campo obrigatório'),
  })
  .required()

const Cadastro = () => {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (formData: IFormData) => {
    try{
      const result = await registerUser(formData);
      console.log(result);
      navigate("/feed");
    }catch(e){
        alert("Houve um erro.");
    }
}

  const navigate = useNavigate();
    
    const handleClick = ({ref}:any) => {
        navigate(ref);
    }

  return (
    <>
    <Header />
    <div style={{display: "flex", paddingTop: "100px", maxWidth: "80%", margin: "0 auto", height: "600px"}}>
      
      <div style={{ width: "50%", display: "grid", height: "100%", justifyContent: "center"}}>
        <MainText>
          A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
        </MainText>
      </div>

      <div style={{ width: "50%", height: "100%", padding: "0 20px", display: "flex", flexDirection: "column"}}>
        
        <TitleText>Comece agora grátis</TitleText>
        <BodyText>Crie sua conta e make the change._</BodyText>
        <br />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input name="nome" placeholder="Nome Completo" leftIcon={<FiUser color='purple' />} errorMessage={errors?.nome?.message} control={control} />
          <Input name="Email" placeholder="Email" leftIcon={<FiMail color='purple' />} errorMessage={errors?.Email?.message} control={control} />
          <Input name="Password" placeholder="Password" leftIcon={<FiLock color='purple' />} errorMessage={errors?.Password?.message} control={control} />
          <Button title="Criar minha conta" variant='secundary' type="submit"/>
        </form>

        <div style={{ width: "372px", padding: "20px 0"}}>
          <BodyText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</BodyText>
          <br />
          <MiniText>Já tenho conta. <HighlightMiniText onClick={() => handleClick('/login')} > Fazer login</HighlightMiniText></MiniText>
        </div>

      </div>
    </div>
    </>
  )
}

export { Cadastro }
