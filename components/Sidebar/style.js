import styled from 'styled-components';
import Colors from '../Colors';

export const Container = styled.nav`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Anchor = styled.a`
  background-color: ${Colors.gray};
  width: 100%;
  margin: 5px 0;
  padding: 5px 10px;
  -webkit-box-shadow: 4px 4px 11px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 4px 4px 11px -2px rgba(0,0,0,0.75);
  box-shadow: 4px 4px 11px -2px ${Colors.gray1};

  &:hover {
    background-color: ${Colors.gray1};
  }

  ${props => props.active && `
    background-color: ${Colors.blue};
  `};
`;

export const ButtonTimes = styled.button`
  width: auto;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    i {
      color: ${Colors.green2};
    }
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;