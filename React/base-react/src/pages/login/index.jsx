import React from 'react';
import { Title } from './styled';
import { Container } from '../../styles/GlobalStyle';

function login() {
  return (
    <Container>
      <Title isRed={false}>
        Login
      </Title>
      <button type="button">Enviar</button>
    </Container>
  );
}

export default login;
