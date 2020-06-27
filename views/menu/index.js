import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { Container, InnerSidebar, InnerContainer } from './style';

const MenuView = ({ router, me }) => {
  return (
    <>
      <Header me={me} />
      <Container>
        <InnerSidebar>
          <Sidebar />
        </InnerSidebar>
        <InnerContainer>Menu =0)</InnerContainer>
      </Container>
    </>
  );
};

export default MenuView;