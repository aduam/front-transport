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

export const InnerContainer = styled.main`
  max-width: calc(100% - (200px));
  padding: 15px;
  width: 100%;
`;