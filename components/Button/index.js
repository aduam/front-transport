import PropTypes from 'prop-types';
import { Container } from './style';

const Button = ({ title, onClick, color, type, loading, textLoading }) => {
  return (
    <Container
      onClick={onClick}
      color={color || 'blue'}
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
};

Button.defaultProps = {
  onClick: undefined,
  color: 'blue',
  type: 'submit',
  loading: false,
  textLoading: 'Cargando'
};

export default Button;