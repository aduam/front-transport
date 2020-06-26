import styled from 'styled-components';
import Colors from '../Colors';

export const Container = styled.input`
  width: 100%;
  border: 1px solid gray;
  padding: 4px 8px;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  &:hover {
    border: 1px solid ${Colors.green4};
  }
  &:focus, &:active {
    border: 1px solid ${Colors.green3};
  }
`;