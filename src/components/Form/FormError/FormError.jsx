import { ErrorText } from './FormError.styled';
import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';


export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  )
};

FormError.propTypes = {
  name: PropTypes.string.isRequired,
};
