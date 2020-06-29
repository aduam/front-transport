import React from 'react';
import Router from 'next/router';
import ReactTooltip from "react-tooltip";
import { useCookies } from 'react-cookie';
import Me from '../Me';
import { Container } from './style';

const Header = ({ me }) => {
  const [_, __, removeCookie] = useCookies('authorization');
  const handleClick = () => {
    removeCookie('authorization');
    Router.push('/');
  };
  return (
    <Container>
      <Me me={me} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ color: 'white' }}>{me.corporation || 'nombre de la empresa'}</p>
        <button data-tip='Cerrar sesión' onClick={handleClick}><i style={{ color: 'white', cursor: 'pointer' }} className="fas fa-sign-out-alt" /></button>
        <ReactTooltip backgroundColor='#262626' />
      </div>
    </Container>
  );
};

export default Header;