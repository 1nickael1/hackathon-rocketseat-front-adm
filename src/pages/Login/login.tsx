import React from "react";
import { Container, LoginContent, TituloForm, Form, Titulo, Botao, Fundo } from "./style";
import { ILogin } from "./types";
import { Base } from "assets/images";

import {Link} from 'react-router-dom'

export const Login = (props: ILogin) => {

  function handleRoute() {
    return 
  }

  return (
    <Container>
      <Fundo src={Base} alt="fundo" />
      <LoginContent>

        <Titulo>LOGIN</Titulo>

        <TituloForm>

        Email
        </TituloForm>
        <Form type="text"/>
        <TituloForm>

        Senha
        </TituloForm>
        <Form type="text"/>

        <Link to="dashboard" style={{width: '100%'}}>
        <Botao>
          Logar
        </Botao>
        </Link>
      </LoginContent>
    </Container>
  );
};
