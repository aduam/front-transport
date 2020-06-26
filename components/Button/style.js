import styled from 'styled-components';
import Colors from '../Colors';

export const Container = styled.button`
  padding: 5px 15px;
  background-color: ${Colors.green};
  color: white;
  font-size: 'Lato', sans-serif;
  font-size: 15px;
  &:hover {
    background-color: ${Colors.green2};
  }
`;