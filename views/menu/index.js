import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { Container, InnerSidebar, InnerContainer } from './style';

const MenuView = ({ me, router }) => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Header me={me} setMenu={setMenu} menu={menu} />
      <Container>
        <InnerSidebar menu={menu}>
          <Sidebar setMenu={setMenu} menu={menu} path={router.route === '/menu'} />
        </InnerSidebar>
        <InnerContainer>Menu =0)</InnerContainer>
      </Container>
    </>
  );
};

export default MenuView;