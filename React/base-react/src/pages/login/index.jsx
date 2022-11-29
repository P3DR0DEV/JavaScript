import React from 'react';
import { Title } from './styled';
import { Container } from '../../styles/GlobalStyle';

function login() {
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>teste</small>
      </Title>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <button type="button">Enviar</button>
    </Container>
  );
}

export default login;
