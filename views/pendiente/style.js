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

export const Main = styled.main`
  max-width: 100%;
  padding: 15px 0;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: calc(100% - (200px));
    padding: 15px;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
`;

export const Paragraph = styled.p`
  padding: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  min-width: 150px;

  @media screen and (min-width: 768px) {
    min-width: ${({ width }) => width || 170}px;
  }
`;

export const WrapButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  & > button {
    margin-left: 5px;
  }
`;