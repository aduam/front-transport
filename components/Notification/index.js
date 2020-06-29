import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
  &:target {
    visibility: visible;
    opacity: 1;
  }
`;

const Popup = styled.div`
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
`;

const Notification = () => {
  return (
      <Container>
        <Popup></Popup>
      </Container>
  );
};

export default Notification;