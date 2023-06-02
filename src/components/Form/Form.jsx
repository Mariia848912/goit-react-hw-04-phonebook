import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  FormPhonebook,
  Input,
  FormGroup,
  Label,
  LabelText,
  ButtonSubmit,
} from './Form.styled';
import { FormError } from './FormError/FormError';
import { getValidationSchema } from '../utils/getValitadionSchema';

const initialValues = {
  name: '',
  number: '',
};

export const FormContacts = ({onSubmit}) => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = (value, actions) => {
    onSubmit(value.name, value.number);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={getValidationSchema}
    >
      <FormPhonebook>
        <FormGroup role="group" aria-labelledby="add-contact-details">
          <Label htmlFor={nameInputId}>
            <LabelText>Name</LabelText>

            <Input type="text" name="name" id={nameInputId} />
            <FormError name="name" />
          </Label>

          <Label htmlFor={numberInputId}>
            <LabelText>Number</LabelText>
            <Input type="tel" name="number" id={numberInputId} />
            <FormError name="number" />
          </Label>
          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </FormGroup>
      </FormPhonebook>
    </Formik>
  );
};

FormContacts.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
