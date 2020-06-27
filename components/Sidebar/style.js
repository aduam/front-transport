import styled from 'styled-components';
import Colors from '../Colors';

export const Container = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

export const Anchor = styled.a`
  background-color: ${Colors.gray};
  margin: 5px 0;
  padding: 5px 10px;
  -webkit-box-shadow: 4px 4px 11px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 4px 4px 11px -2px rgba(0,0,0,0.75);
  box-shadow: 4px 4px 11px -2px ${Colors.gray1};

  &:hover {
    background-color: ${Colors.gray1};
  }
`;