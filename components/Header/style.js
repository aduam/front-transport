import styled from 'styled-components';
import Colors from '../Colors';

export const Container = styled.header`
  width: 100%;
  background-color: ${Colors.green1};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoutButton = styled.button`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  min-width: 35px;
  min-height: 35px;
  cursor: pointer;
  i {
    color: white;
  }
  &:hover {
    background-color: ${Colors.green2};
  }
`;

export const MenuButton = styled.button`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  min-width: 35px;
  min-height: 35px;
  display: block;
  cursor: pointer;
  i {
    color: white;
  }
  &:hover {
    background-color: ${Colors.green2};
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;