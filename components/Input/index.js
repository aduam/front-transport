import PropTypes from 'prop-types';
import { Container } from './style';

const Input = ({ id, name, type, onChange, value, required, className, placeholder }) => {
  return (
    <Container
      className={className}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      required={required}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  onChange: undefined,
  value: null,
  required: false,
  placeholder: 'Ingresar...',
};

export default Input;