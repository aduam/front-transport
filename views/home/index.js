import React from 'react';
import Link from 'next/link';
import isLogged from '../../hocs/isLogged';
import { Container, Header, Nav, Anchor, InnerContainer } from './style';

const HomeView = () => {
  return (
    <>
      <Header>
        <Nav>
          <Link href='/'>
            <Anchor>Logo</Anchor>
          </Link>
          <Anchor href='/#'>test 1</Anchor>
          <Anchor href='/#'>test 2</Anchor>
          <Anchor href='/#'>Nosotros</Anchor>
          <Link href='/ingresar'>
            <Anchor>Iniciar sesión</Anchor>
          </Link>
        </Nav>
      </Header>
      <Container>
        <InnerContainer>
          <h2 style={{ color: 'white', }}>Empresa de transporte =0)</h2>
        </InnerContainer>
      </Container>
    </>
  );
};

export default isLogged(HomeView);