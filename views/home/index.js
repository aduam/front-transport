import isLogged from '../../hocs/isLogged';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #fafafa;
`;

const HomeView = props => {
  return <Container>homeview</Container>;
};

export default isLogged(HomeView);