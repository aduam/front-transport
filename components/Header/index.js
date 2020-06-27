import Me from '../Me';
import { Container } from './style';

const Header = ({ me }) => {
  return (
    <Container>
      <Me me={me} />
      <div style={{ color: 'white' }}>Nombre de la empresa</div>
    </Container>
  );
};

export default Header;