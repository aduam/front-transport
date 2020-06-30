import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Container, Anchor, ButtonTimes } from './style';

const menuItems = [
  { title: 'Llenar boleta', href: '/boleta' },
  { title: 'Boletas pendientes', href: '/pendiente' },
  { title: 'Boletas en progreso', href: '/en_progreso' },
  { title: 'Boletas liquidadas', href: '/liquidado' },
];

const Sidebar = ({ setMenu, menu, path }) => {
  console.log(path)
  return (
    <Container>
      <ButtonTimes onClick={() => setMenu(!menu)}><i className="far fa-times-circle" /></ButtonTimes>
      {menuItems.map((e, index) => (
        <Link key={index} href={`${e.href}`}>
          <Anchor active={path}>{e.title}</Anchor>
        </Link>
      ))}
    </Container>
  );
};

Sidebar.propTypes = {
  menu: PropTypes.bool,
  setMunu: PropTypes.func,
  path: PropTypes.string,
};

Sidebar.defaultProps = {
  menu: false,
  setMenu: undefined,
};

export default Sidebar;