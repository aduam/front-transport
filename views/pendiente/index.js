import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Container, InnerContainer, InnerSidebar } from './style';

const PendentView = ({ me }) => {
  return (
    <>
      <Header me={me} />
      <Container>
        <InnerSidebar>
          <Sidebar />
        </InnerSidebar>
        <InnerContainer>boleta pendiente</InnerContainer>
      </Container>
    </>
  );
};

export default PendentView;