import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Ticket from '../../components/Ticket';
import { Container, InnerContainer, InnerSidebar } from './style';

const BoletaView = ({ me }) => {
  return (
    <>
      <Header me={me} />
      <Container>
        <InnerSidebar>
          <Sidebar />
        </InnerSidebar>
        <InnerContainer>
          <Ticket />
        </InnerContainer>
      </Container>
    </>
  );
};

export default BoletaView;