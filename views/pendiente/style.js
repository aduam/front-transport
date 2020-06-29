import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  padding: 0 15px;
`;

export const InnerSidebar = styled.div`
  width: 200px;
`;

export const Main = styled.main`
  max-width: calc(100% - (200px));
  padding: 15px;
  width: 100%;
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
  min-width: ${({ width }) => width || 170}px;
`;

export const WrapButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  & > button {
    margin-left: 5px;
  }
`;