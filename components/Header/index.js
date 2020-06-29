import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import ReactTooltip from "react-tooltip";
import { useCookies } from 'react-cookie';
import Me from '../Me';
import { Container, MenuButton, LogoutButton } from './style';

const Header = ({ me, setMenu, menu }) => {
  const [_, __, removeCookie] = useCookies('authorization');
  const handleClick = () => {
    removeCookie('authorization');
    Router.push('/');
  };
  return (
    <Container>
      <Me me={me} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ color: 'white', marginRight: 15 }}>{me.corporation || 'nombre de la empresa'}</p>
        <LogoutButton data-tip='Cerrar sesión' onClick={handleClick}><i className="fas fa-sign-out-alt" /></LogoutButton>
        <MenuButton onClick={() => setMenu(!menu)}><i className="fas fa-bars" /></MenuButton>
        <ReactTooltip backgroundColor='#262626' />
      </div>
    </Container>
  );
};

Header.propTypes = {
  menu: PropTypes.bool,
  setMenu: PropTypes.func,
};

Header.defaultProps = {
  menu: false,
  setMenu: () => {},
};

export default Header;