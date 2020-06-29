import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Container, Anchor, ButtonTimes } from './style';

const menuItems = [
  { title: 'Menu', href: '/menu', },
  { title: 'Llenar boleta', href: '/boleta' },
  { title: 'Boletas pendientes', href: '/pendiente' },
];

const Sidebar = ({ setMenu, menu }) => {
  return (
    <Container>
      <ButtonTimes onClick={() => setMenu(!menu)}><i class="far fa-times-circle" /></ButtonTimes>
      {menuItems.map((e, index) => (
        <Link key={index} href={`${e.href}`}>
          <Anchor>{e.title}</Anchor>
        </Link>
      ))}
    </Container>
  );
};

Sidebar.propTypes = {
  menu: PropTypes.bool,
  setMunu: PropTypes.func,
};

Sidebar.defaultProps = {
  menu: false,
  setMenu: undefined,
};

export default Sidebar;