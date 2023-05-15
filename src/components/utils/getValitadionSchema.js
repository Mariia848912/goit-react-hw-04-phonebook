import * as yup from 'yup';

export function getValidationSchema() {
  const phoneRegExp =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
  const nameRegExp =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

  const nameValidationText =
    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
  const numberValidationText =
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';

  return yup.object().shape({
    name: yup.string().required().matches(nameRegExp, nameValidationText),
    number: yup.string().required().matches(phoneRegExp, numberValidationText),
  });
}
