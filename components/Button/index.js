import PropTypes from 'prop-types';
import Colors from '../Colors';
import { Container } from './style';

const Button = ({ title, onClick, color, type, loading, textLoading, bg }) => {
  return (
    <Container
      onClick={onClick}
      color={color || Colors.green}
      bg={bg || Colors.green2}
      type={type || 'submit'}
    >
      {loading ? [textLoading, <i style={{ marginLeft: 5, }} className="fas fa-circle-notch fa-spin" />] : title}
    </Container>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
  type: PropTypes.string,
  loading: PropTypes.bool,
  textLoading: PropTypes.string,
  bg: PropTypes.string,
};

Button.defaultProps = {
  onClick: undefined,
  type: 'submit',
  loading: false,
  textLoading: 'Cargando'
};

export default Button;