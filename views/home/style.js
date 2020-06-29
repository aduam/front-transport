import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  background-color: black;
  opacity: 0.8;
`;

export const Nav = styled.nav`
  max-width: 1300px;
  width: 100%;
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
`;

export const Anchor = styled.a`
  padding: 5px 10px;
  color: #BEBEBE;

  &:hover {
    color: white;
  }
`;

export const Container = styled.main`
  background-color: #fafafa;
  margin-top: 49px;
`;

export const InnerContainer = styled.div`
  background-color: black;
  opacity: 0.7;
  width: 100%;
  height: calc(100vh - 49px);
  display: flex;
  justify-content: center;
  align-items: center;
`;