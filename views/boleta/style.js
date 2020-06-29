import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  padding: 0;

  @media screen and (min-width: 768px) {
    padding: 0 15px;
  }
`;

export const InnerSidebar = styled.div`
  width: 200px;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
  ${props => props.menu && `
    width: 100%;
    height: 100vh;
    display: block;
    position: fixed;
    top: 0;
    background-color: white;
  `};
`;

export const InnerContainer = styled.main`
  max-width: 100%;
  padding: 15px;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: calc(100% - (200px));
  }
`;