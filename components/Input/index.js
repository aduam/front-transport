import PropTypes from 'prop-types';
import { Container } from './style';

const Input = ({ id, name, type, onChange, required, className, placeholder, refi }) => {
  return (
    <Container
      className={className}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      ref={refi}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  onChange: undefined,
  required: false,
  placeholder: 'Ingresar...',
};

export default Input;